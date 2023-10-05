import { FiberContainer } from "./FiberContainer";
import Lottie from "lottie-react";
import tree_anime from "../../public/tree_anime.json";
import { Container, Image, Box, Heading } from "@chakra-ui/react";

export function MainBody() {
  return (
    <Container m="0 40px " width="95vw" height="80vh" display="flex">
      <Box
        boxSize="sm"
        bgColor="#F9FFD1"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        display="flex"
        width="50%"
      >
        <Heading fontSize="32px" width="100">
          How are you
        </Heading>
        <Heading fontSize="18px">More stuff</Heading>
        <Lottie style={{ height: "40px" }} animationData={tree_anime} />
      </Box>

      <div style={{ width: "50%", height: "30" }}>
        <FiberContainer />
      </div>
    </Container>
  );
}
