import { ChakraBaseProvider } from "@chakra-ui/react";
import { Header } from "./Header.jsx";
import { MainBody } from "./MainBody";
import { More } from "./More.jsx";

function App() {
  return (
    <div
      className="holder"
      style={{ height: "100vw", backgroundColor: "white" }}
    >
      <Header />
      <MainBody />
      <More />
    </div>
  );
}

export default App;
