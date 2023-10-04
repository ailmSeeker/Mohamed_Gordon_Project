import "./App.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { FiberContainer } from "./FiberContainer";
import { Textarea } from "@chakra-ui/react";
import { Header } from "./Header.jsx";
function App() {
  return (
    <>
      <Header />
      <div className="App">
        <FiberContainer />
      </div>
    </>
  );
}

export default App;
