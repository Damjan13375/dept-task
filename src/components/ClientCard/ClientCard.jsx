import React from "react";
import { Image } from '@chakra-ui/react'
import './ClientCard.css'
import {  Flex } from "@chakra-ui/react";

const ClientCard = ({imageAlt, imageUrl}) =>{
    return (
      <Flex direction={'column'} className="ClientCardContainer" align="center" justify="center">
          {imageUrl && <Image src={require(`../../assets/Logos/${imageUrl}`)} className="clientCardImage" alt={imageAlt}/>}
      </Flex>
    )
}

export default ClientCard;