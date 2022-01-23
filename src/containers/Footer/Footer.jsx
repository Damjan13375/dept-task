import { Flex } from "@chakra-ui/layout";
import React from "react";
import "./Footer.css";
import FacebookIcon from "../../assets/Icons/icon-fb.svg";
import TwitterIcon from "../../assets/Icons/icon-twitter.svg";
import InstagramIcon from "../../assets/Icons/icon-instagram.svg";
import Scroll from "../../assets/Icons/icon-scroll-to-top.svg";
import DeptLogo from "../../assets/Icons/icon-white-dept.svg";

const Footer = () => {
  return (
    <Flex className="footerContainer">
      <Flex direction="column" className="footer">
        <Flex align="center"  justify="space-around">
          <img src={DeptLogo} className="deptLogo" alt="dept-logo" />

          <Flex className="columnResponsive">
            <a
              href="https://www.deptagency.com/work/"
              rel="noreferrer"
              target="_blank"
              className="footerLink linkText"
            >
              Work
            </a>
            <a
              href="https://www.deptagency.com/services/"
              rel="noreferrer"
              target="_blank"
              className="footerLink linkText"
            >
              Service
            </a>
            <a
              href="https://www.deptagency.com/culture/"
              rel="noreferrer"
              target="_blank"
              className="footerLink linkText"
            >
              Stories
            </a>
            <a
              href="https://www.deptagency.com/agency-details/"
              rel="noreferrer"
              target="_blank"
              className="footerLink linkText"
            >
              About
            </a>
            <a
              href="https://www.deptagency.com/careers/"
              rel="noreferrer"
              target="_blank"
              className="footerLink linkText"
            >
              Careers
            </a>
            <a
              href="https://www.deptagency.com/contact/"
              rel="noreferrer"
              target="_blank"
              className="footerLink linkText"
            >
              Contact
            </a>
          </Flex>
          <Flex className="columnResponsive">
            <a
              href="https://www.facebook.com/DeptAgency/"
              rel="noreferrer"
              target="_blank"
              className="footerLink socialIcons"
            >
              <img src={FacebookIcon} alt="facebook-icon" />
            </a>
            <a
              href="https://twitter.com/deptagency?lang=en"
              rel="noreferrer"
              target="_blank"
              className="footerLink socialIcons"
            >
              <img src={TwitterIcon} alt="twotter-icon" />
            </a>

            <a
              href="https://www.instagram.com/deptagency/?hl=en"
              rel="noreferrer"
              target="_blank"
              className="footerLink socialIcons"
            >
              <img src={InstagramIcon} alt="instagram-icon" />
            </a>
          </Flex>
        </Flex>
        <hr className="footerLine"></hr>
<Flex justify="space-evenly" className="copyright">
  <h1>Chamber of Commerce: 63464101</h1>
  <h1>VAT: NL 8552.47.502.B01</h1>
  <h1>Terms and conditions</h1>
  <h1>&copy; 2018 Dept Agency</h1>
</Flex>
      </Flex>
      <Flex className="scrollTop column-center">
        <Flex
          className="column-center scrollTopContent"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={Scroll} alt="scroll-icon" />

          <h1>TOP</h1>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
