import React, { useContext, useState } from "react";
import { Input, Button, Stack, Text } from "@chakra-ui/react";
import { SessionContext } from "../utils/context";

const UserNameForm = () => {
  const sessionProvider = useContext(SessionContext);
  // Usa el userName del context como valor inicial
  const [name, setName] = useState(sessionProvider.userName);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Usa la funcion que nos da el Context para cambiar el valor del userName
    sessionProvider.setUserName(name);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack m="8" maxW="460px" spacing="2">
        <Text>Enter new name</Text>
        {/* Usa un controlled input https://chakra-ui.com/docs/form/input#controlled-input */}
        <Input
          placeholder="User name"
          value={name}
          onChange={handleNameChange}
        />
        <Button type="submit">Change user name</Button>
      </Stack>
    </form>
  );
};

export default UserNameForm;
