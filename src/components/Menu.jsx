import React, { useEffect } from "react";
import { Fade, Box, Flex } from "@chakra-ui/react";
import "./Menu.css";
import TopNavigation from "../containers/TopNavigation/TopNavigation";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Menu = ({ open, setOpenMenu }) => {
  const body = document.querySelector("body");
  useEffect(() => {
    if (open) {
      body.style.overflowY = "hidden";
    }
    if (!open) {
      body.style.overflowY = "scroll";
    }
  }, [open]);

  return (
    <Fade in={open}>
      <Box className={`menu menu-${open}`} display={open ? "block" : "none"}>
        <TopNavigation inMenu setOpenMenu={setOpenMenu} />
        <Flex className="contentContainer" justify="space-between">
          <Flex direction="column" className="global" justify="space-between">
            <Flex direction="column">
              <h1>Landen</h1>
              <h1>Global</h1>
              <h1>Nederlanden</h1>
              <h1>United States</h1>
              <h1>Ireland</h1>
              <h1>United Kingdom</h1>
              <h1>Deutchland</h1>
              <h1>Schweiz</h1>
            </Flex>

            <Flex direction="column">
                 <a href="https://www.facebook.com/DeptAgency/" rel="noreferrer" target="_blank"  ><h1>facebook</h1></a> 
                 <a href="https://twitter.com/deptagency?lang=en" rel="noreferrer" target="_blank"  ><h1>twitter</h1></a> 
                 <a href="https://www.instagram.com/deptagency/?hl=en" rel="noreferrer" target="_blank"  ><h1>instagram</h1></a> 
                 <a href="https://www.linkedin.com/company/deptagency/" rel="noreferrer" target="_blank"  ><h1>linkedin</h1></a> 
            </Flex>
          </Flex>
          <Flex direction="column" className="menuContent" align="flex-end">
            <h1><ChevronRightIcon boxSize={"1.5em"} className="chevronRight"/> Home</h1>
            <hr className="contentLine lastLines"></hr>
            <h1>Werk</h1>
            <hr className="contentLine"></hr>

            <h1>Over</h1>
            <hr className="contentLine"></hr>

            <h1>Dienstein</h1>
            <hr className="contentLine"></hr>

            <h1>Partners</h1>
            <hr className="contentLine"></hr>

            <h1>Stories</h1>
            <hr className="contentLine lastLines"></hr>

            <h1>Vacatures</h1>
          </Flex>
        </Flex>
      </Box>
    </Fade>
  );
};

export default Menu;
