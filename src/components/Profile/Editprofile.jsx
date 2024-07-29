import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Header from '../Header';
import Footer from '../Footer';

const EditProfile = () => {
  return (
    <Box>
    <Header/>
    <Container maxW="container.xl" p={4}  >
      <Flex bg="white" boxShadow="md" borderRadius="md" p={6} alignContent="center" justifyContent="center">
        {/* Left section: Avatar and user details */}
        <VStack align="center" spacing={4} w="20%" p={4} borderRight="1px solid #e2e8f0">
          <Avatar size="2xl" name="John Doe" src="https://bit.ly/broken-link" />
          <Box textAlign="center">
            <Text fontSize="lg" fontWeight="bold">John Doe</Text>
            <Text fontSize="sm" color="gray.500">john_doe123@bbb.com</Text>
            <Text fontSize="sm" color="gray.500">United States</Text>
          </Box>
        </VStack>

        {/* Middle section: Profile form */}
        <VStack align="stretch" spacing={4} w="50%" p={4}>
          <Text fontSize="xl" fontWeight="bold">Edit your profile</Text>
          <SimpleGrid columns={2} spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="John" />
            </FormControl>
            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input placeholder="Doe" />
            </FormControl>
            <FormControl>
              <FormLabel>Headline</FormLabel>
              <Input placeholder="UI/UX Developer" />
            </FormControl>
            <FormControl>
              <FormLabel>Current Position</FormLabel>
              <Input placeholder="UI/UX Developer at Boston" />
            </FormControl>
            <FormControl>
              <FormLabel>Education</FormLabel>
              <Input placeholder="Boston University" />
            </FormControl>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Input placeholder="USA" />
            </FormControl>
            <FormControl>
              <FormLabel>State/Region</FormLabel>
              <Input placeholder="Boston" />
            </FormControl>
          </SimpleGrid>
          <Button mt={6} colorScheme="orange" alignSelf="flex-start">Save Profile</Button>
        </VStack>

        
      </Flex>
    </Container>
    <Footer/>
    </Box>
  );
};

export default EditProfile;
