import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  Avatar,
  IconButton,
  Center,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { FaCamera } from 'react-icons/fa';

const EditProfile = () => {
  const [userInfo, setUserInfo] = useState({
    utAdresse: '',
    utCin: '',
    utCity: '',
    utCountry: '',
    utFName: '',
    utLName: '',
    utMail: '',
    utPassword: '',
    utZipCode: '',
    utImage: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        utImage: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <>
      <Header />
      <Center minHeight="100vh" bg="gray.50" p={4}>
        <Box p={6} bg="white" shadow="md" borderWidth="1px" borderRadius="md" width="60%">
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Heading as="h2" size="lg" textAlign="left" color="orange.400" mb={6}>
                Edit Profile
              </Heading>
              <Flex justify="space-between">
                <Center>
                  <FormControl id="utImage" textAlign="center">
                    <Avatar size="2xl" src={userInfo.utImage} mb={4} />
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      display="none"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload">
                      <IconButton
                        as="span"
                        icon={<FaCamera />}
                        size="lg"
                        variant="outline"
                        colorScheme="orange"
                        cursor="pointer"
                      />
                    </label>
                  </FormControl>
                </Center>
                <Stack spacing={4} width="60%">
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      name="utFName"
                      value={userInfo.utFName}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="utMail"
                      value={userInfo.utMail}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="text"
                      name="utPhone"
                      value={userInfo.utPhone}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input
                      type="text"
                      name="utAdresse"
                      value={userInfo.utAdresse}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </Stack>
              </Flex>
              
              <Flex justify="flex-end" mt={6}>
                <Button type="submit" colorScheme="orange" size="lg" width="30%" mr={4}>
                  Save
                </Button>
                <Button colorScheme="gray" size="lg" width="30%">
                  Cancel
                </Button>
              </Flex>
            </Stack>
          </form>
        </Box>
      </Center>
      <Footer />
    </>
  );
};

export default EditProfile;
