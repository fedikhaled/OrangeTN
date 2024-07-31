import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Container,
  Text,
  Button,
  HStack,
} from '@chakra-ui/react';
import Header from '../Header';
import Footer from '../Footer';
import ContratCard from './ContratCard';

const contrats = [
  { id: 1, code: 'C001', status: 'actif' },
  { id: 2, code: 'C002', status: 'expiré' },
  { id: 3, code: 'C003', status: 'actif' },
  { id: 4, code: 'C004', status: 'expiré' },
  { id: 5, code: 'C005', status: 'actif' },
  { id: 6, code: 'C006', status: 'expiré' },
  { id: 7, code: 'C007', status: 'actif' },
  { id: 8, code: 'C008', status: 'expiré' },
  { id: 9, code: 'C009', status: 'actif' },
];

const itemsPerPage = 5;

const ContratList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(contrats.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contrats.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box bg="gray.50" minH="100vh">
      <Header />
      <Container maxW="container.lg" py={10}>
        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
          Liste des Contrats
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {currentItems.map((contrat) => (
            <ContratCard key={contrat.id} contrat={contrat} />
          ))}
        </SimpleGrid>
        <HStack justifyContent="center" mt={6}>
          <Button onClick={handlePreviousPage} isDisabled={currentPage === 1}>
            Précédent
          </Button>
          <Text mx={4}>
            Page {currentPage} sur {totalPages}
          </Text>
          <Button onClick={handleNextPage} isDisabled={currentPage === totalPages}>
            Suivant
          </Button>
        </HStack>
      </Container>
      <Footer />
    </Box>
  );
};

export default ContratList;
