import Layout from "./containers/MainContent/Layout";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Work from "./containers/MainContent/Work";
import Clients from "./containers/Clients/Clients";
import Questions from "./containers/Questions/Questions";
import Footer from "./containers/Footer/Footer";
import "./fonts.css";

function App() {
  return (
    <ChakraProvider resetCSS>
      <div className="App" >
        <Layout />
        <Work />
        <Clients/> 
        <Questions />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
