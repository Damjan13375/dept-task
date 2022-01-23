import React, { useState } from "react";
import { Select, Flex } from "@chakra-ui/react";
import { work, work2, work3, work4, work5, work6 } from "../../constants/data";
import Card from "../../components/Card/Card";
import BigCard from "../../components/BigCard/BigCard";
import { Button } from "../../components/Buttons";
import "./Work.css";

const Work = () => {
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [industryFilter, setIndustryFilter] = useState(null);
  const filteredData = (toFilter) => {
    return toFilter.filter((element) => {
      if (categoryFilter && industryFilter) {
        return (
          element.category === categoryFilter &&
          element.industry === industryFilter
        );
      }
      if (categoryFilter) {
        if (categoryFilter === "all work") {
          return element;
        }
        return element.category === categoryFilter;
      }
      if (industryFilter) {
        if (industryFilter === "all industries") {
          return element;
        }
        return element.industry === industryFilter;
      }
      return element;
    });
  };

  return (
    <>
      <Button
        color="white"
        bg="#0e0e0e"
        height="50px"
        borderRadius={0}
        margin="15px auto"
        width="90vw"
        variant="solid"
        className="viewCaseButton"
        text="View Case"
      />
      <Flex align="center" className="filters" justify="flex-end">
        <Flex align="center">
          <h1 className="show">Show me </h1>
          <Select
            variant="flushed"
            className="select"
            maxWidth={"200px"}
            onChange={(e) => {
              setCategoryFilter(
                e.target.value === "all work" ? null : e.target.value
              );
            }}
          >
            <option defaultValue>all work</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </Select>
        </Flex>
        <Flex align="center">
          <h1>in </h1>

          <Select
            variant="flushed"
            className="select"
            placeholder=""
            maxWidth={"200px"}
            onChange={(e) => {
              setIndustryFilter(
                e.target.value === "all industries" ? null : e.target.value
              );
            }}
          >
            <option defaultValue>all industries</option>
            <option value="industry1">Industry 1</option>
            <option value="industry2">Industry 2</option>
          </Select>
        </Flex>
      </Flex>
      <div className="wrapper">
        <Flex justify={"space-around"} flexWrap="wrap" className="cardWrapper">
          {work &&
            filteredData(work).map((element, index) => (
              <Card {...element} key={index} />
            ))}
        </Flex>
      </div>
      {work5 &&
        filteredData(work5).map((element, index) => {
          return <BigCard {...element} key={index} />;
        })}
      <div className="wrapper">
        <Flex justify={"space-around"} flexWrap="wrap" className="cardWrapper">
          {work2 &&
            filteredData(work2).map((element, index) => (
              <Card {...element} key={index} />
            ))}
        </Flex>
      </div>
      {work6 &&
        filteredData(work6).map((element, index) => {
          return <BigCard {...element} key={index} />;
        })}

      <div className="wrapper">
        <Flex justify={"space-around"} flexWrap="wrap" className="cardWrapper">
          {work3 &&
            filteredData(work3).map((element, index) => (
              <Card {...element} key={index} />
            ))}
        </Flex>
      </div>
      <Flex justify="center" align="center" direction="column">
        <hr className="testimonialLine"></hr>
        <h1 className="testimonial">
          “Dept helped us tell our story through a bold new identity and a
          robust online experience. To the tune of 60% growth in online bookings
          in just one month.”
        </h1>
        <h2 className="testimonialSign">MATTIJS TEN BRINK – CEO, TRANSAVIA</h2>
      </Flex>
      <div className="wrapper">
        <Flex justify={"space-around"} flexWrap="wrap" className="cardWrapper">
          {work4 &&
            filteredData(work4).map((element, index) => (
              <Card {...element} key={index} />
            ))}
        </Flex>
      </div>
    </>
  );
};

export default Work;
