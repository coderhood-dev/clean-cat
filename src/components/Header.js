import React from "react";
import { Flex, Spacer, Box, Button, ButtonGroup } from "@chakra-ui/react";
import logoApp from "../assets/logoApp.svg";

const Header = () => {
  return (
    <Box bg="#0091C7" w="100%" p="1rem">
      <Flex alignItems="center">
        <img src={logoApp} alt="Logo" />
        <Spacer />
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="#15222A" variant="link">
            Home
          </Button>
          <Button colorScheme="#15222A" variant="link">
            About
          </Button>
          <Button colorScheme="#15222A" variant="link">
            Random Cat
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Header;
