import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Text,
  SimpleGrid,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Select,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import visaImage from '../images/visa.png'; // Ensure the image path is correct
import Header from './Header';
import Footer from './Footer';

const SimForm = ({ onNext }) => (
  <VStack spacing={4} align="stretch">
    <FormControl>
      <FormLabel>Numéro de téléphone</FormLabel>
      <Input placeholder="Entrez votre numéro de téléphone" />
    </FormControl>
    <FormControl>
      <FormLabel>Nom</FormLabel>
      <Input placeholder="Entrez votre nom" />
    </FormControl>
    <FormControl>
      <FormLabel>Prénom</FormLabel>
      <Input placeholder="Entrez votre prénom" />
    </FormControl>
    <FormControl>
      <FormLabel>Adresse</FormLabel>
      <Input placeholder="Entrez votre adresse" />
    </FormControl>
    <FormControl>
      <FormLabel>Rue</FormLabel>
      <Input placeholder="Entrez votre rue" />
    </FormControl>
    <FormControl>
      <FormLabel>CIN</FormLabel>
      <Input placeholder="Entrez votre CIN" />
    </FormControl>
    <Button colorScheme="orange" onClick={onNext}>Continuer vers le paiement</Button>
  </VStack>
);

const EsimForm = ({ onNext }) => (
  <VStack spacing={4} align="stretch">
    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input placeholder="Entrez votre email" />
    </FormControl>
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
    <FormLabel>imei</FormLabel>
    <Input placeholder="Entrez votre imei" />
  </FormControl>
    <FormControl>
      <FormLabel>Type de smartphone</FormLabel>
      <Select placeholder="Sélectionnez votre smartphone">
        <option value="galaxy-s21">Galaxy S21</option>
        <option value="galaxy-s22">Galaxy S22</option>
        <option value="galaxy-s23">Galaxy S23</option>
        <option value="galaxy-s24-ultra">Galaxy S24 Ultra</option>
        <option value="iphone-13">iPhone 13</option>
        <option value="iphone-14">iPhone 14</option>
      </Select>
    </FormControl>
    <Button colorScheme="orange" onClick={onNext}>Continuer vers le paiement</Button>
  </VStack>
);

const PaymentForm = ({ onBack, onPay }) => (
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
    <Button colorScheme="orange" w="full" onClick={onPay}>PAYER</Button>
    <Button variant="outline" onClick={onBack}>Retour au formulaire</Button>
  </VStack>
);

const AcheterNumero = () => {
  const [formType, setFormType] = useState('sim');
  const [step, setStep] = useState('form');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleNext = () => setStep('payment');
  const handleBack = () => setStep('form');

  const handlePay = () => {
    onOpen();
  };

  const getAlertDialogBody = () => {
    if (formType === 'sim') {
      return 'Veuillez consulter la boutique Ooredoo près de vous pour récupérer votre SIM.';
    } else if (formType === 'esim') {
      return 'Consultez votre email pour récupérer vos informations eSIM.';
    }
    return '';
  };

  return (
    <Box>
      <Header />
      <Container maxW="container.lg" p={4}>
        {step === 'form' && (
          <Tabs variant="enclosed">
            <TabList>
              <Tab onClick={() => setFormType('sim')}>SIM</Tab>
              <Tab onClick={() => setFormType('esim')}>eSIM</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box p={6} boxShadow="md" bg="white" borderRadius="md">
                  <SimForm onNext={handleNext} />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box p={6} boxShadow="md" bg="white" borderRadius="md">
                  <EsimForm onNext={handleNext} />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        )}
        {step === 'payment' && (
          <Box mt={6} p={6} boxShadow="md" bg="white" borderRadius="md">
            <HStack mb={4} spacing={4}>
              <Box flex="1">
                <Image src={visaImage} alt="Card" />
              </Box>
              <Box flex="2">
                <PaymentForm onBack={handleBack} onPay={handlePay} />
              </Box>
            </HStack>
          </Box>
        )}
      </Container>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" display="flex" alignItems="center">
              <CheckCircleIcon color="green.500" mr={2} />
              Confirmation de paiement
            </AlertDialogHeader>
            <AlertDialogBody>
              {getAlertDialogBody()}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="orange" onClick={onClose}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Footer />
    </Box>
  );
};

export default AcheterNumero;
