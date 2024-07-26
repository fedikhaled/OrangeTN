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
import Header from './Header';
import Footer from './Footer';

const ConvertSimToEsimForm = ({ onNext }) => (
  <VStack spacing={4} align="stretch">
    <FormControl>
      <FormLabel>Numéro</FormLabel>
      <Input placeholder="Entrez votre numéro" />
    </FormControl>
    <FormControl>
      <FormLabel>Date d'activation</FormLabel>
      <Input placeholder="Entrez votre date d'activation" type="date" />
    </FormControl>
    <FormControl>
      <FormLabel>IMEI</FormLabel>
      <Input placeholder="Entrez votre IMEI" />
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
    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input placeholder="Entrez votre email" />
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

const ConvertSimToEsim = () => {
  const [step, setStep] = useState('form');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleNext = () => setStep('payment');
  const handleBack = () => setStep('form');

  const handlePay = () => {
    onOpen();
  };

  return (
    <Box>
      <Header />
      <Container maxW="container.lg" p={4}>
        {step === 'form' && (
          <Box p={6} boxShadow="md" bg="white" borderRadius="md">
            <ConvertSimToEsimForm onNext={handleNext} />
          </Box>
        )}
        {step === 'payment' && (
          <Box mt={6} p={6} boxShadow="md" bg="white" borderRadius="md">
            <HStack mb={4} spacing={4}>
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
              Consultez votre email pour récupérer vos informations eSIM.
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

export default ConvertSimToEsim;
