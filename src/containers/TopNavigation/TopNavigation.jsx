import React from "react";
import DeptLogo from "../../assets/Icons/icon-dept.svg";
import DeptLogoWhite from "../../assets/Icons/icon-white-dept.svg";
import Menu from "../../assets/Icons/icon-menu.svg";
import { FlexRow } from "../../components/Blocks";
import { CloseIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { useWindowDimensions } from "../../hooks/windowSize";
import "./TopNavigation.css";

const TopNavigation = ({ setOpenMenu, inMenu=false }) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <FlexRow className={`topNavigation-${inMenu}`}>
        <img
          src={inMenu && width >= 425 ? DeptLogoWhite : DeptLogo}
          className={`logo-${inMenu}`}
          alt="dept-logo"
        />

        <FlexRow>
          {inMenu ? (
            <CloseIcon className="closeIcon" onClick={setOpenMenu} />
          ) : (
            <Flex
              className={"menuIconContainer"}
              onClick={() => {
                setOpenMenu();
              }}
            >
              <h2>Menu</h2>
              <img src={Menu} alt="menu"/>
            </Flex>
          )}
        </FlexRow>
      </FlexRow>
      <hr className="menuLine"></hr>
    </>
  );
};

export default TopNavigation;
