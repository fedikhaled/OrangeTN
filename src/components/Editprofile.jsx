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
import Header from './Header';
import Footer from './Footer';

const EditProfile = () => {
  return (
    <Box>
    <Header/>
    <Container maxW="container.xl" p={4}>
      <Flex bg="white" boxShadow="md" borderRadius="md" p={6}>
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

        {/* Right section: Experience */}
        <VStack align="stretch" spacing={4} w="30%" p={4} borderLeft="1px solid #e2e8f0">
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold">Edit Experience</Text>
            <IconButton icon={<AddIcon />} colorScheme="orange" />
          </Flex>
          <Box p={4} w="full" bg="gray.50" borderRadius="md" boxShadow="sm">
            <Text fontSize="md" fontWeight="bold">Senior UI/UX Designer</Text>
            <Text fontSize="sm" color="gray.500">Twitter Inc.</Text>
            <Text fontSize="sm" color="gray.500">March 2019 - May 2020</Text>
          </Box>
          <Box p={4} w="full" bg="gray.50" borderRadius="md" boxShadow="sm">
            <Text fontSize="md" fontWeight="bold">Senior UI/UX Designer</Text>
            <Text fontSize="sm" color="gray.500">Facebook Inc.</Text>
            <Text fontSize="sm" color="gray.500">March 2017 - May 2019</Text>
          </Box>
          <Box p={4} w="full" bg="gray.50" borderRadius="md" boxShadow="sm">
            <Text fontSize="md" fontWeight="bold">UI/UX Designer</Text>
            <Text fontSize="sm" color="gray.500">Google Inc.</Text>
            <Text fontSize="sm" color="gray.500">March 2016 - May 2017</Text>
          </Box>
        </VStack>
      </Flex>
    </Container>
    <Footer/>
    </Box>
  );
};

export default EditProfile;
