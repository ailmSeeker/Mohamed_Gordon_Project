import { FiberContainer } from "./FiberContainer";
import { SimpleGrid, Image, Box } from "@chakra-ui/react";

export function MainBody() {
  return (
    <SimpleGrid columns={2} spacing={10} width="90vw" m="auto" bgColor="orange">
      <div style={{ width: "30", height: "30" }}>
        <FiberContainer />
      </div>
      <Box boxSize="sm">
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>
    </SimpleGrid>
  );
}
