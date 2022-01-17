import React from "react";
import DeptLogo from "../../assets/Icons/icon-dept.svg";
import Menu from "../../assets/Icons/icon-menu.svg";
import { FlexRow } from "../../components/Blocks";
import "./TopNavigation.css";

const TopNavigation = () => {
  return (
    <FlexRow className="topNavigation">
      <img src={DeptLogo} />

      <FlexRow>
        <h2>Menu</h2>
        <img src={Menu} />
      </FlexRow>
    </FlexRow>
  );
};

export default TopNavigation;
