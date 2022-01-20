import { Flex } from "@chakra-ui/layout";
import React from "react";
import ClientCard from "../../components/ClientCard/ClientCard";
import { clients } from "../../constants/clientData";
import './Clients.css'

const Clients = () => {
  return (
    <Flex direction="column" align="center">
      <h1 className="clients">Clients</h1>
      <h2 className="clientsDescription">
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.
      </h2>
      <Flex className="clientsContainer" wrap="wrap">

          {clients.map((client) => (
              <ClientCard imageUrl={client.url} />
          ))}
            </Flex>

    </Flex>
  );
};

export default Clients;
