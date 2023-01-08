import React from "react";
import {
  Center,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";

import Project from "./project";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
const Projects = () => {
  return (
    <>
      <Divider />

      <Center className="reveal" id="projects" py={4}>
        <Text
          textTransform={"uppercase"}
          color={"blue.400"}
          fontWeight={600}
          fontSize={"sm"}
          bg={useColorModeValue("blue.50", "blue.900")}
          p={2}
          alignSelf={"flex-start"}
          rounded={"md"}
        >
          My Projects
        </Text>
      </Center>
      <Center className="reveal" py={2}>
        <Heading>Here are some of My Projects</Heading>
      </Center>

      <SimpleGrid
        columns={["1", "1", "1", "1"]}
        gap={["5", "6", "10"]}
        p={["2", "2", "3", "26"]}
      >
        <Project
          img={
            "https://user-images.githubusercontent.com/40628582/210967114-d22db46e-05d6-4c42-b446-a867bdaf5f45.png"
          }
          head={"Tweeter-GIPHY.com"}
          des={
            "This is Social media website where users can post GIF with a caption 😋"
          }
          tech={[
            "NextJS",
            "ChakraUI",
            "Nodemailer",

            "Redux",
            "React",
            "MongoDB",
            "Expressjs",
          ]}
          yt={"https://youtu.be/arOeeMtoNwo"}
          ver={"https://tweeter-giphy.vercel.app/"}
          git={"https://github.com/jstgrowup/Tweeter-GIPHY.com"}
          features={[
            "Signup/login",
            "User Profile will have all his/her posts posted",
            "Timeline where he/she will be able to see all the posts",
            "Like other people posts",
            "Follow other users",
            "Delete the Account and Update the Profile",
          ]}
        />
        <Project
          img={
            "https://user-images.githubusercontent.com/40628582/208730326-d10b4b6d-2301-43b9-9298-fb3de9c191d3.png"
          }
          head={"Medimed.com"}
          des={
            "Medimed.com is inspired by Netmeds.com, Netmeds.com is a trusted Indian online pharmacy where users can buy medicines."
          }
          tech={[
            "ChakraUI",
            "Redux",
            "React",
            "MongoDB",
            "Expressjs",
            "Firebase",
            "Paypal",
          ]}
          
          yt={"https://drive.google.com/file/d/1yo1G79PDlXZYpT2G3ZekdWiMEy9gqM7U/view?usp=share_link"}
          ver={"https://medimed-com.vercel.app/"}
          git={"https://github.com/jstgrowup/Medimed.com"}
          features={[
            "Search Products",
            "Signup and Login using OTP",
            "Products Add to cart",
            "Changing the quantity and delete items from cart",
            "Checkout and payment using paypal",
          ]}
        />

        <Project
          img={
            "https://user-images.githubusercontent.com/40628582/203826638-3af1bc41-3ae7-45a0-8324-f42422c24e57.png"
          }
          head={"Tendercuts Clone"}
          des={
            "Tendercuts website is basically a food ordering website they are delivered by the local shops freshelly."
          }
          tech={[
            "ChakraUI",
            "Redux",
            "React",
            "MongoDB",
            "Expressjs",
            "Typescript",
            "Paypal",
          ]}
          yt={""}
          ver={"https://tendercutsclone.vercel.app/"}
          git={"https://github.com/Madhusainadh/tendercuts_Clone"}
          features={[
            "Signup and Login using MongoDB",
            "Products Add to cart",
            "Changing the quantity in the cart",
            "Checkout and payment using paypal",
          ]}
        />
        <Project
          img={"https://user-images.githubusercontent.com/40628582/211184056-f8ae6701-dd73-42a2-9bf5-ff0130d2155f.png"}
          head={"TimeCamp Clone"}
          des={
            "Time-camp website which is a time tracking web application used to keep track of the team's work progress"
          }
          tech={[
            "ChakraUI",
            "RouterDOM",
            "Google-Firebase_Auth",
            "React",
            "Redux",
            "Bootstarp",
            "CSS",
          ]}
          yt={"https://youtu.be/0-9m-XROu_w"}
          ver={"https://timecamp-jet.vercel.app/"}
          git={"https://github.com/ssksds/Time-Camp-Clone"}
          features={[
            "Signup and Login using Google firebase",
            "Dashboard where users can create a project",
            "Password reset using Email",
            "Informative and descriptive pages",
          ]}
        />
        <Project
          img={"https://i.ibb.co/26JwSLW/2.png"}
          head={"Pharmeasy Clone"}
          des={
            "An e-commerce web application that widely provides e-pharmacy,diagnostics, and healthcare solutions"
          }
          tech={["JavaScript", "HTML3", "CSS", "Local Storage"]}
          yt={
            "https://www.linkedin.com/posts/subham-dey4021_firstproject-webdevelopment-javascript-activity-6930024203802787840-KrVY?utm_source=share&utm_medium=member_desktop"
          }
          ver={
            "https://startling-malasada-ccd5c5.netlify.app/sagar%20and%20pravhat/navbarforhome"
          }
          git={"https://github.com/jstgrowup/Pharmeasy-Clone"}
          features={[
            "Search for products",
            "Signup and Login",
            "Changing the quantity",
            "Payment and checkout",
          ]}
        />
        <Project
          img={"https://i.ibb.co/d6m68DR/1.png"}
          head={"Sparkamerica Clone"}
          des={
            "SparkAmerica is an American health awareness community-building website where people register themselves and join the community."
          }
          tech={[
            "React JS",
            "ChakraUI",
            "React Router",
            "Typescript",
            "Local Storage",
          ]}
          yt={"https://youtu.be/ExVNJnaNgUo"}
          ver={"https://spark-america.vercel.app"}
          git={"https://github.com/jstgrowup/SparkAmerica_Clone.git"}
          features={["Registration", "Login", "Dummy captcha"]}
        />
        <Project
          img={
            "https://user-images.githubusercontent.com/40628582/205213183-6cdc9a16-543b-4173-8606-81ba57cf25d6.png"
          }
          head={"BeautyBebo Clone"}
          des={
            "This is an Indian e-commerce website widely known for selling beauty products for females"
          }
          tech={["JavaScript", "HTML3", "CSS", "Local Storage"]}
          yt={
            "https://www.linkedin.com/posts/md-irfan-835202221_html-css-javascript-activity-6944537263556956160-U52T?utm_source=share&utm_medium=member_desktop"
          }
          ver={"https://delightful-duckanoo-17fff8.netlify.app/"}
          git={"https://github.com/jstgrowup/BeautyBebo-clone.git"}
          features={[
            "Add to cart",
            "Changing quantity",
            "Signup and Login",
            "Payment and Checkout",
          ]}
        />
        <Project
          img={"https://i.ibb.co/qDnLcJn/4.png"}
          head={"Star Wars Clone"}
          des={
            "This is a mini project where i made a clone of the starwars search website ,here you can find the details of you favourite starwars character"
          }
          tech={["JavaScript", "HTML3", "CSS", "Local Storage"]}
          yt={"https://youtu.be/mk53cFRR0Ro"}
          ver={"https://starwars-search-subham.netlify.app/"}
          git={"https://github.com/jstgrowup/Starwars_website.git"}
          features={[
            "Searching the Starwars character",
            "Search reccomendations",
          ]}
        />
        <Project
          img={
            "https://user-images.githubusercontent.com/40628582/205966166-8cdceb26-397a-4ede-a5c5-1481d32d6ac4.png"
          }
          head={"Todo App"}
          des={
            "This is a Todo application where user can add new tasks and delete tasks as well as update the tasks status"
          }
          tech={["ChakraUI", "json-server", "React"]}
          yt={"https://youtu.be/jjymg-85vfo"}
          ver={"https://todo-app-fawn-kappa.vercel.app/"}
          git={"https://github.com/jstgrowup/Todo-App"}
          features={[
            "Adding todo",
            "Updating the status",
            "Deleting the tasks",
            "Pagination",
          ]}
        />
      </SimpleGrid>
    </>
  );
};

export default Projects;
