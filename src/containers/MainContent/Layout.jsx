import React, { useState } from "react";
import TopNavigation from "../TopNavigation/TopNavigation";
import "./Layout.css";
import { Button } from "../../components/Buttons";
import Menu from "../../components/Menu";
import { Flex } from "@chakra-ui/layout";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="frontPage">
      <TopNavigation setOpenMenu={() => setOpenMenu(!openMenu)} />
      <Menu open={openMenu} setOpenMenu={() => setOpenMenu(!openMenu)} />
      <Flex className="workTitle">
        <h1>WORK</h1>
      </Flex>
      <Flex justify="flex-end" width={"90vw"}>
        <Button
          color="white"
          bg="#0e0e0e"
          height="50px"
          width="170px"
          variant="solid"
          className="viewCaseBtn"
          text="View Case"
        />
      </Flex>
    </div>
  );
};

export default Layout;
