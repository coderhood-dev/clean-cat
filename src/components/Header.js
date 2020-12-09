import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer, Box, Button, ButtonGroup } from "@chakra-ui/react";
import logoApp from "../assets/logoApp.svg";
import UserName from "./UserName";

const Header = () => {
  return (
    <Box bg="#0091C7" w="100%" p="1rem">
      <Flex alignItems="center">
        <img src={logoApp} alt="Logo" />
        <Spacer />
        <ButtonGroup variant="outline" spacing="6">
          <Link to="/" exact>
            <Button colorScheme="#15222A" variant="link">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button colorScheme="#15222A" variant="link">
              About
            </Button>
          </Link>
          <Link to="/random-cat">
            <Button colorScheme="#15222A" variant="link">
              Random Cat
            </Button>
          </Link>
          <UserName />
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Header;
