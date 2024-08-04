import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Select,
  useToast,
} from '@chakra-ui/react';

const initialContrats = [
  { id: 1, code: 'C001', nomClient: 'John Doe', offre: 'Offre 100 Go', dateActivation: '2023-01-01', dateExpiration: '2024-01-01', statut: 'Actif' },
  { id: 2, code: 'C002', nomClient: 'Jane Smith', offre: 'Offre 75 Go', dateActivation: '2022-01-01', dateExpiration: '2023-01-01', statut: 'Expiré' },
  // Ajouter d'autres contrats ici
];

const GestionContrats = () => {
  const [contrats, setContrats] = useState(initialContrats);
  const [filterStatus, setFilterStatus] = useState('Tous');
  const toast = useToast();

  const handleStatusChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleDeleteContrat = (id) => {
    setContrats(contrats.filter(contrat => contrat.id !== id));
    toast({
      title: 'Contrat supprimé.',
      description: 'Le contrat a été supprimé avec succès.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const filteredContrats = contrats.filter(contrat => {
    return filterStatus === 'Tous' || contrat.statut === filterStatus;
  });

  return (
    <Box p={4}>
      <HStack spacing={4} mb={4}>
        <Select
          value={filterStatus}
          onChange={handleStatusChange}
          w="200px"
        >
          <option value="Tous">Tous</option>
          <option value="Actif">Actif</option>
          <option value="Expiré">Expiré</option>
        </Select>
      </HStack>
      <VStack align="stretch" spacing={4}>
        {filteredContrats.map(contrat => (
          <Box key={contrat.id} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <HStack justifyContent="space-between">
              <VStack align="start">
                <Text fontWeight="bold">Code Contrat: {contrat.code}</Text>
                <Text>Nom Client: {contrat.nomClient}</Text>
                <Text>Offre: {contrat.offre}</Text>
                <Text>Date Activation: {contrat.dateActivation}</Text>
                <Text>Date Expiration: {contrat.dateExpiration}</Text>
                <Text>Statut: {contrat.statut}</Text>
              </VStack>
              <Button colorScheme="red" onClick={() => handleDeleteContrat(contrat.id)}>
                Supprimer
              </Button>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default GestionContrats;
