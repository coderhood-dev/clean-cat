import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box>
      <Spinner color="red.500" />
      <h1>loading...</h1>
    </Box>
  );
};

export default Loading;
