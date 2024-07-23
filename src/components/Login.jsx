import {
  Flex,
  Box,
  Heading,
  Text,
  Input,
  Button,
  Checkbox,
  Link,
  HStack,
  useColorModeValue,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import Header from "./Header"
import Footer from "./Footer"


import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";


const Login = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    toast({
      title: "Login Successful",
      description: "You have successfully logged in.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box>
  <Header/>
    <Flex
      bg={useColorModeValue("gray.100", "gray.700")}
      minH="100vh"
      align="center"
      justify="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="md"
        rounded="lg"
        overflow="hidden"
      >
        <Flex flexDirection="column" p={8}>
          <Heading size="lg" textAlign="center">
            se connecter à votre compte
          </Heading>
          <Text textAlign="center" mt={2} fontSize="sm">
          Connectez-vous à votre compte afin de pouvoir continuer à construire et à modifier vos flux d'intégration.
          </Text>
          <form>
            <Box mt={6}>
              <Input
                type="text"
                placeholder="Entez votre CIN"
                size="lg"
                focusBorderColor={useColorModeValue("orange.500", "orange.300")}
              />
            </Box>
            <Box mt={4}>
              <InputGroup size="lg">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Entrer votre mot de passe"
                  focusBorderColor={useColorModeValue("orange.500", "orange.300")}
                />
                <InputRightElement width="4.5rem">
                  <IconButton
                    h="full"
                    aria-label="Toggle Password"
                    onClick={handleClick}
                    icon={
                      showPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )
                    }
                  />
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box mt={4}>
              <Checkbox
                size="lg"
                colorScheme="orange"
                defaultChecked={false}
              >
                Remember Me
              </Checkbox>
              <Link
                href="#"
                color="orange.500"
                fontSize="sm"
                float="right"
              >
                Forgot password
              </Link>
            </Box>
            <Button
              mt={6}
              colorScheme="orange"
              size="lg"
              onClick={handleLogin}
            >
              LOG IN
            </Button>
            
            <HStack mt={4} justify="center" spacing={4}>
              <IconButton
                aria-label="Google Login"
                size="lg"
                icon={<FaGoogle />}
                bg="white"
                colorScheme="orange"
                _hover={{ bg: "orange.50" }}
                _active={{ bg: "orange.100" }}
              />
              <IconButton
                aria-label="Facebook Login"
                size="lg"
                icon={<FaFacebook />}
                bg="white"
                colorScheme="orange"
                _hover={{ bg: "orange.50" }}
                _active={{ bg: "orange.100" }}
              />
              <IconButton
                aria-label="Twitter Login"
                size="lg"
                icon={<FaTwitter />}
                bg="white"
                colorScheme="orange"
                _hover={{ bg: "orange.50" }}
                _active={{ bg: "orange.100" }}
              />
            </HStack>
          </form>
        </Flex>
      </Box>
      <Box
        bg={useColorModeValue("gray.200", "gray.700")}
        rounded="lg"
        overflow="hidden"
        p={8}
        textAlign="center"
        ml={8}
      >
        <Heading size="lg">Don't Have an Account Yet?</Heading>
        <Text mt={2} fontSize="sm">
          Let's get you all set up so you can start creating your first
          onboarding experience.
        </Text>
        <Button
          mt={6}
          colorScheme="orange"
          size="lg"
          onClick={onOpen}
        >
         registrer
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>créer un compte</DrawerHeader>
            <DrawerBody>
              <form>
                <Box mt={6}>
                  <Input
                    type="text"
                    placeholder="Entrez votre CIN"
                    size="lg"
                    focusBorderColor={useColorModeValue("orange.500", "orange.300")}
                  />
                </Box>
                <Box mt={4}>
                  <InputGroup size="lg">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="entrer votre mot de passe"
                      focusBorderColor={useColorModeValue(
                        "orange.500",
                        "orange.300"
                      )}
                    />
                    <InputRightElement width="4.5rem">
                      <IconButton
                        h="full"
                        aria-label="Toggle Password"
                        onClick={handleClick}
                        icon={
                          showPassword ? (
                            <FaEyeSlash />
                          ) : (
                            <FaEye />
                          )
                        }
                      />
                    </InputRightElement>
                  </InputGroup>
                </Box>
                <Box mt={4}>
                <InputGroup size="lg">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="comfirmer votre mot de passe"
                  focusBorderColor={useColorModeValue(
                    "orange.500",
                    "orange.300"
                  )}
                />
                <InputRightElement width="4.5rem">
                  <IconButton
                    h="full"
                    aria-label="Toggle Password"
                    onClick={handleClick}
                    icon={
                      showPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )
                    }
                  />
                </InputRightElement>
              </InputGroup>
                </Box>
                <Button
                  mt={6}
                  colorScheme="orange"
                  size="lg"
                  onClick={handleLogin}
                >
                  CREER UN COMPTE
                </Button>
              </form>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
    <Footer/>
    </Box>
  );
};

export default Login;