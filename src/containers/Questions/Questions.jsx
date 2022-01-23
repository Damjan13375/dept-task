import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Input, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { Button } from "../../components/Buttons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormErrorMessage,
  ModalCloseButton,
} from "@chakra-ui/react";
import "./Questions.css";

const Questions = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  // const validateEmail = (email) => {
  //   return email
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  // };
  // const validateData= ({name, email,message})=>{
  //   if(!name || !email || !message){
  //   return false;
  //   }
  //   if(name.length<=2 || message.length<=5){
  //     return false;
  //   }
  //   if(!validateEmail(email)){
  //     return false;
  //   }
  // }
  const validateData = () => {
    let validForm = true;
    Object.entries(formData).map((element) => {
      const field = element[0];
      const value = element[1];
      if (value === "") {
        setFormErrors(prevState => ({
          ...prevState,
          [field]: true
      }))
        validForm = false;
      }
    });

    return validForm;
  };
  const submit = () => {
    //do something with the form data;
    setFormErrors({
      name: false,
      email: false,
      message: false,
    });
    if (!validateData()) {
      return;
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setOpenModal(true);
  };
  return (
    <Flex className="columnResponsive question">
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={30}>Great!</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={20}>Your message has been sent.</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              text="Close"
              fontSize={16}
              mr={3}
              onClick={() => setOpenModal(false)}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        align="center"
        justify="center"
        className="columnResponsive questionsContainer"
      >
        <h1 className="questions">QUESTION? WE ARE HERE TO HELP!</h1>
        <Flex direction="column" className="inputContainer columnResponsive">
          <Flex className="columnResponsive">
            <FormControl isInvalid={formErrors.name}>
              <FormLabel htmlFor="name">NAME</FormLabel>
              <Input
                variant="flushed"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                placeholder="Your name"
              />
              <FormErrorMessage>Name is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formErrors.email}>
              <FormLabel htmlFor="email">EMAIL</FormLabel>
              <Input
                id="email"
                variant="flushed"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                placeholder="name@provider.com"
              />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
          </Flex>
          <FormControl isInvalid={formErrors.message}>
            <FormLabel htmlFor="message">MESSAGE</FormLabel>
            <Textarea
              id="message"
              variant="flushed"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              type="text"
              name="message"
              value={formData.message}
              placeholder="Your message..."
            />
            <FormErrorMessage>Message is required.</FormErrorMessage>
          </FormControl>
          <Button
            className="sendBtn"
            bg="#1a18f7"
            width={"140px"}
            onClick={submit}
            text={"SEND"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Questions;
