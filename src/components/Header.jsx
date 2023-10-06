import { UnorderedList, ListItem } from "@chakra-ui/react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
} from "@chakra-ui/react";

import { Login } from "./Login.jsx";

import { useDisclosure } from "@chakra-ui/react";
import "../styles/header.css";

export function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        Earth
      </a>
      <nav className="navbar">
        <a href="#">Support</a>
        <a href="#">Login</a>
      </nav>
    </header>
  );
}
