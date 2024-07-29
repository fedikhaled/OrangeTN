import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Icon,
  HStack,Image
} from '@chakra-ui/react';
import { MdReportProblem } from 'react-icons/md';
import claim from "../../images/claim.png";
import Header from '../Header';
import Footer from '../Footer';
const Reclamation = () => {
  return (
    <Box>
    <Header/>

    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="container.lg">
        <Box textAlign="center" mb={10}>
          <Text fontSize="4xl" fontWeight="bold">
            Obtenez l'aide dont vous avez besoin.
          </Text>
          <Text fontSize="lg" color="gray.600">
            Décrivez-nous votre problème et nous vous proposerons la meilleure solution.
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" mb={10}>
        <Image src={claim} alt="Card" />
         {/*<Icon as={MdReportProblem} boxSize="200px" color="orange.500" />*/} 
        </Box>
        <VStack spacing={8} align="stretch">
          <FormControl id="reclamation">
            <FormLabel fontSize="lg" fontWeight="bold">Réclamation</FormLabel>
            <Input placeholder="Décrivez votre problème ici..." size="lg" />
          </FormControl>
          <Button colorScheme="orange" size="lg">Soumettre</Button>
        </VStack>
      </Container>
    </Box>
    <Footer/>
    </Box>
  );
};

export default Reclamation;
