import { UnorderedList, ListItem } from "@chakra-ui/react";

export function Header() {
  return (
    <UnorderedList
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      border="1px solid black"
      borderRadius="4"
      p="7px"
      width="90%"
      m="auto"
      style={{ listStyleType: "none" }}
    >
      <ListItem fontSize="20" mr="20">
        About
      </ListItem>
      <ListItem fontSize="20">Contact</ListItem>
    </UnorderedList>
  );
}
