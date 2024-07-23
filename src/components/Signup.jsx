import React from 'react';
import { Box, Button, Checkbox, FormControl, FormLabel, Input, Text, VStack } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const SignupForm = () => {
  return (
    <Box>
    <Header/>
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
   
      <Box display="flex" maxW="800px" bg="#f2f2f2" borderRadius="4px" overflow="hidden" boxShadow="0 0 4px rgba(0, 0, 0, 0.2)">
        <Box flex="1" p={8}>
          <Text fontSize="24px" fontWeight="bold" mb={4}>
            Create Account
          </Text>
          <VStack spacing={4} align="stretch">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter your name" required />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter your email address" required />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" required />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone number</FormLabel>
              <Input type="tel" placeholder="Enter your phone number" required />
            </FormControl>
            <FormControl id="confirmPassword">
              <FormLabel>Confirm password</FormLabel>
              <Input type="password" placeholder="Confirm your password" required />
            </FormControl>
            <Checkbox mb={4} required>
              Agree to terms and conditions
            </Checkbox>
            <Button colorScheme="orange" size="lg" width="100%">
              Create Account
            </Button>
            <Link to="/Login">
            <Text>
            se connecter à un compte existant
            </Text>
            </Link>
          </VStack>
        </Box>
        <Box flex="1" p={8} bg="#333" color="#fff">
          <Text fontSize="24px" fontWeight="bold" mb={4}>
            Create Your Account Now
          </Text>
          <Text fontSize="16px" lineHeight="1.5">
            Créez votre compte maintenant et gagnez du temps pour vos prochaines commandes
            (vous aurez la possibilité de suivre simplement vos commandes et de bénéficier d'offres exclusives).
          </Text>
        </Box>
      </Box>
     
      </Box>
      <Footer/>
        </Box>
  );
};

export default SignupForm;