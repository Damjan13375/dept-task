import Layout from "./containers/MainContent/Layout";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Work from "./containers/MainContent/Work";

function App() {
  return (
    <ChakraProvider resetCSS>
      <div className="App">
        <Layout />
        <Work />
      </div>
    </ChakraProvider>
  );
}

export default App;
