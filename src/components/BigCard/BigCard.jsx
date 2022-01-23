import React from "react";
import { Image } from "@chakra-ui/react";
import "./BigCard.css";
import { Flex, AspectRatio } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const BigCard = ({
  imageAlt,
  title,
  description,
  subTItle,
  subDescription,
  imageFirst = false,
}) => {
  return (
    <Flex
      className="bigCardContainer"
      direction={imageFirst ? "row" : "row-reverse"}
      justify="center"
    >
      <Flex direction="column" className={`imageContainer-${imageFirst}`}>
        <AspectRatio
          maxW="800px"
          ratio={4 / 3}
          className="aspectRatio"
          objectFit="cover"
        >
          <Image
            src={require(`../../assets/Images/florensis.png`)}
            className="bigCardImage"
            alt={imageAlt}
          />
        </AspectRatio>
        <Flex direction="column" className="textUnderImage">
          <h2 className="title subtitle">Florensis</h2>
          <h2 className="description subDescription">
            Rethinking the entire online ecosystem
          </h2>
          <h2 className="case">
            <ChevronRightIcon boxSize={"1.5em"} /> View Case
          </h2>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        className={`imageFirst-${imageFirst}`}
        width={300}
      >
        <hr className="line"></hr>
        <h2 className="title">{title}</h2>
        <h2 className="description">{description}</h2>
        <h2 className="case">
          <ChevronRightIcon boxSize={"1.5em"} /> View Case
        </h2>

        <hr className="line"></hr>

        <h2 className="title">{subTItle}</h2>
        <h2 className="description">{subDescription}</h2>
        <h2 className="case">
          <ChevronRightIcon boxSize={"1.5em"} /> View Case
        </h2>
      </Flex>
    </Flex>
  );
};

export default BigCard;
