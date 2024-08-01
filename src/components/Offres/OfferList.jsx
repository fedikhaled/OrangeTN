import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Container,
  Text,
  Button,
  HStack,
  Tabs,
  TabPanels,
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
  { id: 1, nom: 'Offre 100 Go', desc: 'Description de l\'offre 100 Go', prix: 72, type_service: 'Internet Mobile', service_name: '100 Go', duree_expiration: 60, },
  { id: 2, nom: 'Offre 75 Go', desc: 'Description de l\'offre 75 Go', prix: 60, type_service: 'Internet Mobile', service_name: '75 Go', duree_expiration: 60,  },
  { id: 3, nom: 'Offre 55 Go', desc: 'Description de l\'offre 55 Go', prix: 55, type_service: 'Internet Mobile', service_name: '55 Go', duree_expiration: 30,  },
  { id: 4, nom: 'Offre 30 Go', desc: 'Description de l\'offre 30 Go', prix: 30, type_service: 'Internet Mobile', service_name: '30 Go', duree_expiration: 30, },
  { id: 5, nom: 'Offre 25 Go', desc: 'Description de l\'offre 25 Go', prix: 22.5, type_service: 'Internet Mobile', service_name: '25 Go', duree_expiration: 30, },
  { id: 6, nom: 'Offre 20 Go', desc: 'Description de l\'offre 20 Go', prix: 18, type_service: 'Internet Mobile', service_name: '20 Go', duree_expiration: 30, },
  { id: 7, nom: 'Offre 15 Go', desc: 'Description de l\'offre 15 Go', prix: 15, type_service: 'Internet Mobile', service_name: '15 Go', duree_expiration: 30, },
  { id: 8, nom: 'Offre 10 Go', desc: 'Description de l\'offre 10 Go', prix: 10, type_service: 'Internet Mobile', service_name: '10 Go', duree_expiration: 30,},
  { id: 9, nom: 'Offre 5 Go', desc: 'Description de l\'offre 5 Go', prix: 5, type_service: 'Internet Mobile', service_name: '5 Go', duree_expiration: 30, },
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
