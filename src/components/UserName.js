import React, { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { SessionContext } from "../utils/context";

const UserName = () => {
  // con el hook useContext se puede usar todo lo que este dentro del contexto
  const sessionProvider = useContext(SessionContext);
  return <Text>{sessionProvider.userName}</Text>;
};

export default UserName;
