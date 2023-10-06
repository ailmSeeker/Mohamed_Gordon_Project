import { UnorderedList, ListItem } from "@chakra-ui/react";
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
