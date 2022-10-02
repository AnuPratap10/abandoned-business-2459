import {
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import calendly from "./calendly.svg";
import {useNavigate} from "react-router-dom"


const Password = () => {

  const nav=useNavigate()


const handleClick=()=>{

  nav("/")
  alert("User Login Sucessfully")
  
}


  return (
    <ChakraProvider>
    <VStack w="100%" p="30px">
      <VStack w="50%" h="400px" p="40px">
        <Image src={calendly} h="40px" />
        <Text>Welcome back, anu@gmail.com!</Text>
        <a href="#">(This is Not me)</a>
        <FormControl w="85%" h="100%" className="shaddow" p="30px" rounded="md">
          <FormLabel pb="5px">Enter your password.</FormLabel>
          <Input type="password" placeholder="password" />
          <Stack
            display="flex"
            w="100%"
            justifyItems="flex-end"
            alignContent="center"
            alignItems="end"
            pt="30px"
          >
            <Button onClick={handleClick} w="80px">Login</Button>
          </Stack>
        </FormControl>
      </VStack>
      <Text w="35%" textAlign="center">
        I forgot my password. Please send me a recovery email.
      </Text>
      <Text w="35%" textAlign="center">
        Don't have an account? Sign up.
      </Text>
    </VStack>
  
    </ChakraProvider>
  );
};

export default Password;
