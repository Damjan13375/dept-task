import React from "react";
import { Image } from '@chakra-ui/react'
import './Card.css'
import {  Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Card = ({imageAlt, imageUrl, title,url}) =>{
    return (
      <Flex direction={'column'} className="cardContainer">
          {imageUrl && <Image src={require(`../../assets/Images/${imageUrl}`)} className="cardImage" alt={imageAlt}/>}
          <h2 className="url">{url}</h2>
          <h2 className="title">{title}</h2>
          <h2 className="case"><ChevronRightIcon boxSize={'2em'} /> View Case</h2>
      </Flex>
    )
}

export default Card;