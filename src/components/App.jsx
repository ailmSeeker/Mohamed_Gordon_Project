import { ChakraBaseProvider } from "@chakra-ui/react";
import { Header } from "./Header.jsx";
import { MainBody } from "./MainBody";
import { More } from "./More.jsx";
import { Login } from "./Login.jsx";

function App() {
  return (
    <ChakraBaseProvider>
      <div
        className="holder"
        style={{ height: "100vw", backgroundColor: "white" }}
      >
        <Header />
        <MainBody />
        <More />
      </div>
    </ChakraBaseProvider>
  );
}

export default App;
