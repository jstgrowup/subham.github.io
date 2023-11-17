import React from "react";

import institutions from "./company-data.json";
import CompanyCard from "./company-card";

import { Heading } from "@chakra-ui/react";
function Workexperience() {
  return (
    <div>
      {/* <Heading>Experience</Heading> */}
      <div>
        {/* {institutions.institutions.map((item) => (
        <CompanyCard
          name={item.name}
          img={item.img}
          address={item.address}
          learn={item.learn}
        />
      ))} */}
      </div>
    </div>
  );
}

export default Workexperience;
