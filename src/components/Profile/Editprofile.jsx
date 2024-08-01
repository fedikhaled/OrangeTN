import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
  VStack,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { FaCamera } from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';

const EditProfile = () => {
  return (
    <Box>
      <Header />
      <Container maxW="container.xl" p={4}>
        <Flex
          bg="white"
          boxShadow="md"
          borderRadius="md"
          p={6}
          direction={{ base: 'column', md: 'row' }}
        >
          {/* Left section: Avatar and upload icon */}
          <VStack
            align="center"
            spacing={4}
            w={{ base: '100%', md: '20%' }}
            p={4}
            borderRight={{ base: 'none', md: '1px solid #e2e8f0' }}
            position="relative"
          >
            <Box position="relative">
              <Avatar size="2xl" name="John Doe" src="https://bit.ly/broken-link" />
              <IconButton
                icon={<FaCamera />}
                position="absolute"
                bottom="0"
                right="0"
                colorScheme="orange"
                aria-label="Update profile picture"
                borderRadius="full"
                size="sm"
                onClick={() => document.getElementById('imageUpload').click()}
              />
            </Box>
            <Input
              type="file"
              accept="image/*"
              id="imageUpload"
              display="none"
            />
          </VStack>

          {/* Right section: Profile form */}
          <VStack align="stretch" spacing={4} w={{ base: '100%', md: '80%' }} p={4}>
            <Text fontSize="xl" fontWeight="bold">Modifier votre profil</Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl>
                <FormLabel>Nom</FormLabel>
                <Input placeholder="Entrez votre nom" />
              </FormControl>
              <FormControl>
                <FormLabel>Prénom</FormLabel>
                <Input placeholder="Entrez votre prénom" />
              </FormControl>
              <FormControl>
                <FormLabel>CIN</FormLabel>
                <Input placeholder="Entrez votre CIN" />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Entrez votre email" type="email" />
              </FormControl>
              <FormControl>
                <FormLabel>Mot de passe</FormLabel>
                <Input placeholder="Entrez votre mot de passe" type="password" />
              </FormControl>
              <FormControl>
                <FormLabel>Ville</FormLabel>
                <Input placeholder="Entrez votre ville" />
              </FormControl>
              <FormControl>
                <FormLabel>Pays</FormLabel>
                <Input placeholder="Entrez votre pays" />
              </FormControl>
              <FormControl>
                <FormLabel>Adresse</FormLabel>
                <Input placeholder="Entrez votre adresse" />
              </FormControl>
              <FormControl>
                <FormLabel>Code postal</FormLabel>
                <Input placeholder="Entrez votre code postal" />
              </FormControl>
            </SimpleGrid>
            <Button mt={6} colorScheme="orange" alignSelf="flex-start">
              Sauvegarder
            </Button>
          </VStack>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

export default EditProfile;
