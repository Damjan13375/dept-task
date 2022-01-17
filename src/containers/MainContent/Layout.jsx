import React from "react";
import { FlexRow } from "../../components/Blocks";
import { Button } from "../../components/Buttons";
import TopNavigation from '../TopNavigation/TopNavigation';
import './Layout.css'


const Layout = () =>{

    return (
        <div className="frontPage">
        <TopNavigation />
        <FlexRow>
            <h1>
                WORK

            </h1>
        </FlexRow>
        <FlexRow>
            <Button text="CASES" className="casesBtn"/>
        </FlexRow>
        </div>
    )
}

export default Layout;