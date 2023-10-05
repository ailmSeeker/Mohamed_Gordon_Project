import { ChakraBaseProvider } from "@chakra-ui/react";
import "@fontsource/poppins";
import { Header } from "./Header.jsx";
import { MainBody } from "./MainBody";
import { AFooter } from "./AFooter.jsx";
import { More } from "./More.jsx";

function App() {
  return (
    <div className="holder">
      <Header />
      <MainBody />
      <More />
    </div>
  );
}

export default App;
