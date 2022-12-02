import React from "react";
import {
  Button,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Divider,
  Box,
  Flex,
  SimpleGrid,
  Image,
  HStack,
} from "@chakra-ui/react";

import { BsFillCameraVideoFill, BsFillEyeFill, BsGithub } from "react-icons/bs";
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
        <Heading >
          Here are some of My Projects
        </Heading>
      </Center>

      <SimpleGrid
        columns={["1", "1", "1", "1"]}
        gap={["5", "6", "10"]}
        p={["2", "2", "3", "26"]}
      >
        <Project
          img={"https://i.ibb.co/d6m68DR/1.png"}
          head={"Sparkamerica Clone"}
          des={
            "SparkAmerica is an American health awareness community-building website where people register themselves and join the community."
          }
          tech={[
            " ReactJS",
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
          img={"https://user-images.githubusercontent.com/40628582/205213183-6cdc9a16-543b-4173-8606-81ba57cf25d6.png"}
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
        ></Project>
        <Project
          img={"https://user-images.githubusercontent.com/40628582/205212890-9b4433b9-850c-46d8-bf2b-a1ccc5a85e6e.png"}
          head={"TimeCamp Clone"}
          des={
            " Time-camp website which is a time tracking web application used to keep track of the team's work progress"
          }
          tech={["ChakraUI", "Google Auth", "Redux", "Bootstarp", "CSS"]}
          yt={"https://youtu.be/0-9m-XROu_w"}
          ver={"https://timecampclone-cw.netlify.app/"}
          git={"https://github.com/jstgrowup/Time-Camp-Clone"}
          features={[
            "Signup and Login using Firebase",
            "Password reset using Email",
            "Timer dashboard",
          ]}
        ></Project>
      </SimpleGrid>
    </>
  );
};

export default Projects;
