import React from "react";
import light from "./dark.module.css";
import dark from "./light.module.css";
import institutions from "./company-data.json";
import CompanyCard from "./company-card";
import { BsFillBuildingFill } from "react-icons/bs";
import { Heading } from "@chakra-ui/react";
function Workexperience() {
  let styles;

  <div
  // className={styles.education}
  >
    <div>
      <Heading>fsadhgfasdgdfgdsfgdsfgdsfg</Heading>
      {/* <h1>Educ</h1>
      <h1 className={styles.ao}>a</h1>
      <h1>ti</h1>
      <h1 className={styles.ao}>o</h1>
      <h1>n</h1>
      <BsFillBuildingFill className={styles.booksIcon} /> */}
    </div>
    <div>
      {institutions.institutions.map((item) => (
        <CompanyCard
          name={item.name}
          img={item.img}
          address={item.address}
          learn={item.learn}
        />
      ))}
    </div>
  </div>;
}

export default Workexperience;
