import {
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LoginNavbar from "./LoginNavbar"
import { ChakraProvider } from "@chakra-ui/react";
import FooterSec from "./FooterSec";



const Login = () => {

 


  return (
    <>
  <ChakraProvider>
    <LoginNavbar/>
    <VStack w="100%" p="15px">
      <HStack w="100%">
        <VStack w="58%" h="350px">
          <VStack w="70%">
            <Text>
              <span
                style={{
                  fontSize: "4.20875rem",
                  lineHeight: "1.2",
                  fontWeight: "900",
                  textAlign: "left",
                  color: "rgb(11, 53, 88)",
                  marginBottom: "32px",
                  marginRight: "5px",
                }}
              >
                Welcome back to
              </span>
              <span
                style={{
                  color: "rgb(0, 107, 255)",
                  fontSize: "4.20875rem",
                  lineHeight: "1.2",
                  fontWeight: "900",
                  textAlign: "left",
                  marginBottom: "32px",
                }}
              >
                Calendly
              </span>
            </Text>
            <Text>
              Log in to your account to get back to your hub for scheduling
              meetings.
            </Text>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <HStack>
                <Input type="email"
             
                
                />
                <NavLink to="/password">
                  <Button>Login</Button>
                </NavLink>
              </HStack>
            </FormControl>
            <HStack>
              <Text>Don’t have an account?</Text>
              <span>Sign Up</span>
            </HStack>
          </VStack>
        </VStack>
        <VStack w="38%" h="350px" boxShadow="dark-lg" rounded="md" p="20px">
          <Text className="whats" textAlign="left" w="100%" pl="10px" pb="30px">
            <a href="#">WHAT'S NEW</a>
          </Text>
          <Text className="a" textAlign="left" w="100%" pb="15px">
            Introducing Analytics
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.6"
            textAlign="left"
            w="100%"
            pb="15px"
          >
            Discover activity and trends — such as popular meeting days, top
            performers, in-demand meeting types, and more. Available on
            Professional plans and above.
          </Text>
          <HStack textAlign="left" w="100%">
            <a href="#">Learn More</a>
            <img
              src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
              alt="arrow"
              width="20px"
            />
          </HStack>
        </VStack>
      </HStack>
    </VStack>
    </ChakraProvider>

  
    </>

  );
};

export default Login;
