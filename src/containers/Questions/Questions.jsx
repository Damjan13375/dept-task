import { Flex } from "@chakra-ui/layout";
import React from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";
import { Button } from "../../components/Buttons";
import "./Questions.css";

const Questions = () => {
  return (
    <Flex h="60vh">
      <Flex align="center" justify="space-around" width={"85vw"}>
        <h1 className="questions">QUESTION? WE ARE HERE TO HELP!</h1>
        <Flex direction="column" className="inputContainer">
          <Flex>
            <FormControl>
              <FormLabel htmlFor="name">NAME</FormLabel>
              <Input
                variant="flushed"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">EMAIL</FormLabel>
              <Input
                id="email"
                variant="flushed"
                type="email"
                placeholder="name@provider.com"
              />
            </FormControl>
          </Flex>
          <FormControl>
            <FormLabel htmlFor="message">MESSAGE</FormLabel>
            <Input
              id="message"
              variant="flushed"
              type="text"
              placeholder="Your message..."
            />
          </FormControl>
          <Button colorScheme="#1a18f7" text={"SEND"}/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Questions;
