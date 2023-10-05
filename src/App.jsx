import { ChakraBaseProvider } from "@chakra-ui/react";
import { Header } from "./Header.jsx";
import { MainBody } from "./MainBody";
import { AFooter } from "./AFooter.jsx";
import { More } from "./More.jsx";

function App() {
  return (
    <>
      <Header />
      <MainBody />
      <More />
      <AFooter />
    </>
  );
}

export default App;
