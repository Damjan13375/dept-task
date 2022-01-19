import React from "react";
import { Select, Flex } from "@chakra-ui/react";
import { work, work2 } from "../../constants/data";
import Card from "../../components/Card/Card";
import "./Work.css";
import BigCard from "../../components/BigCard/BigCard";

const Work = () => {
  return (
    <>
      <Flex align="center" justify="flex-end">
        <h1>Show me </h1>
        <Select maxWidth={"20vw"}>
          <option defaultValue>all work</option>

          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <h1>in </h1>

        <Select placeholder="" maxWidth={"20vw"}>
          <option defaultValue>all industries</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>
      <div className="wrapper">
        <Flex justify={"space-around"} flexWrap="wrap" margin={"0 120px"}>
          {work &&
            work.map((element, index) => {
              // yes I know index is not a good idea to be put as key, will explain why :D
              return (
                <Card
                  imageAlt={element.imageAlt}
                  imageUrl={element.imageUrl}
                  title={element.title}
                  url={element.url}
                  key={index}
                />
              );
            })}
        </Flex>
      </div>
      <BigCard imageFirst />
      <div className="wrapper">
        <Flex justify={"space-around"} flexWrap="wrap" margin={"0 120px"}>
          {work2 &&
            work2.map((element, index) => {
              // yes I know index is not a good idea to be put as key, will explain why :D
              return (
                <Card
                  imageAlt={element.imageAlt}
                  imageUrl={element.imageUrl}
                  title={element.title}
                  url={element.url}
                  key={index}
                />
              );
            })}
        </Flex>
      </div>
      <BigCard />

      <div className="wrapper">
        <Flex justify={"space-around"} flexWrap="wrap" margin={"0 120px"}>
          {work &&
            work.map((element, index) => {
              // yes I know index is not a good idea to be put as key, will explain why :D
              return (
                <Card
                  imageAlt={element.imageAlt}
                  imageUrl={element.imageUrl}
                  title={element.title}
                  url={element.url}
                  key={index}
                />
              );
            })}
        </Flex>
      </div>
      <Flex justify="center" align="center" direction="column">
      <h1 className="testimonial">“Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month.”</h1>
      <h2 className="testimonialSign">MATTIJS TEN BRINK – CEO, TRANSAVIA</h2>
     
      </Flex>
      <div className="wrapper">
        <Flex justify={"space-around"} flexWrap="wrap" margin={"0 120px"}>
          {work2 &&
            work2.map((element, index) => {
              // yes I know index is not a good idea to be put as key, will explain why :D
              return (
                <Card
                  imageAlt={element.imageAlt}
                  imageUrl={element.imageUrl}
                  title={element.title}
                  url={element.url}
                  key={index}
                />
              );
            })}
        </Flex>
      </div>
    </>
  );
};

export default Work;
