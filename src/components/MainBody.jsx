import { FiberContainer } from "./FiberContainer";
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
          Chaning The World For The Better
        </Heading>
        <Heading fontSize="18px">One Tree At A Time</Heading>
      </Box>

      <div style={{ width: "50%", height: "30" }}>
        <FiberContainer />
      </div>
    </Container>
  );
}
