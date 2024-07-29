import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Container,
  Text,
  Button,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Image,
} from '@chakra-ui/react';
import Header from '../Header';
import Footer from '../Footer';
import CardOffer from './CardOffer';
import visaImage from '../../images/visa.png'; // Ensure the image path is correct

const offers = [
  { id: 1, data: 100, price: 72, validity: 60, isNew: true },
  { id: 2, data: 75, price: 60, validity: 60, isNew: true },
  { id: 3, data: 55, price: 55, validity: 30, isNew: false },
  { id: 4, data: 30, price: 30, validity: 30, isNew: false },
  { id: 5, data: 25, price: 22.5, validity: 30, isNew: false },
  { id: 6, data: 20, price: 18, validity: 30, isNew: false },
  { id: 7, data: 15, price: 15, validity: 30, isNew: false },
  { id: 8, data: 10, price: 10, validity: 30, isNew: false },
  { id: 9, data: 5, price: 5, validity: 30, isNew: false },
];

const itemsPerPage = 5;

const PaymentForm = ({ onBack }) => (
  <VStack spacing={4} align="stretch">
    <Text fontSize="2xl" fontWeight="bold">Détails de paiement</Text>
    <FormControl>
      <FormLabel>Nom sur la carte</FormLabel>
      <Input placeholder="Aziz Khaled" />
    </FormControl>
    <FormControl>
      <FormLabel>Numéro de carte</FormLabel>
      <Input placeholder="16 chiffres" />
    </FormControl>
    <SimpleGrid columns={2} spacing={4}>
      <FormControl>
        <FormLabel>Valide jusqu'au</FormLabel>
        <Input placeholder="02/22" />
      </FormControl>
      <FormControl>
        <FormLabel>CVV</FormLabel>
        <Input placeholder="123" />
      </FormControl>
    </SimpleGrid>
    <Button colorScheme="orange" w="full">PAYER</Button>
    <Button variant="outline" onClick={onBack}>Retour aux offres</Button>
  </VStack>
);

const OfferList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);

  const totalPages = Math.ceil(offers.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = offers.slice(indexOfFirstItem, indexOfLastItem);

  const handleAcheterClick = () => {
    setTabIndex(1);
  };

  const handleBackToOffers = () => {
    setTabIndex(0);
  };

  return (
    <Box bg="gray.50" minH="100vh">
      <Header />
      <Container maxW="container.lg" py={10}>
        <Tabs index={tabIndex} onChange={setTabIndex} variant="enclosed">
          
          <TabPanels>
            <TabPanel>
              <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
                Nos Offres Internet Mobile
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={6}>
                {currentItems.map((offer) => (
                  <CardOffer key={offer.id} offer={offer} onAcheterClick={handleAcheterClick} />
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
            </TabPanel>
            <TabPanel>
              <Box mt={6} p={6} boxShadow="md" bg="white" borderRadius="md">
                <HStack mb={4} spacing={4}>
                  <Box flex="1">
                    <Image src={visaImage} alt="Card" />
                  </Box>
                  <Box flex="2">
                    <PaymentForm onBack={handleBackToOffers} />
                  </Box>
                </HStack>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer />
    </Box>
  );
};

export default OfferList;
