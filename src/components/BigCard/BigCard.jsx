import React from "react";
import { Image } from "@chakra-ui/react";
import "./BigCard.css";
import { Flex } from "@chakra-ui/react";

const BigCard = ({ imageAlt, imageUrl, title, url, imageFirst=false }) => {
  return (
    <Flex
      className="bigCardContainer"
      direction={imageFirst ? "row" : "row-reverse"}
      justify="center"
    >
      <Image
        src={require(`../../assets/Images/arla.png`)}
        className="cardImage"
        alt={imageAlt}
      />
      <Flex
        direction="column"
        className={`imageFirst-${imageFirst}`}
        width={300}
      >
        <hr className="line"></hr>
        <h2 className="title">Microsoft</h2>
        <h2 className="description">
          Tapping into Ireland’s unique gaming culture and bringing a fresh
          flavour to their Xbox social media channels
        </h2>
        <h2 className="case">View Case</h2>
        <hr className="line"></hr>

        <h2 className="title">Microsoft</h2>
        <h2 className="description">
          Tapping into Ireland’s unique gaming culture and bringing a fresh
          flavour to their Xbox social media channels
        </h2>
        <h2 className="case">View Case</h2>
      </Flex>
    </Flex>
  );
};

export default BigCard;
