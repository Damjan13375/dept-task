import React from "react";
import { FlexRow } from "../../components/Blocks";
import TopNavigation from "../TopNavigation/TopNavigation";
import "./Layout.css";
import { Button } from "../../components/Buttons";

const Layout = () => (
      <div className="frontPage">
        <TopNavigation />
        <FlexRow>
          <h1>WORK</h1>
        </FlexRow>
        <FlexRow>
          <Button color="white" bg="#0e0e0e" variant="solid" text="View Case" />
        </FlexRow>
      </div>
  );

export default Layout;
