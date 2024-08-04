import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  useToast,
} from '@chakra-ui/react';

const initialOffres = [
  { id: 1, nom: 'Offre 100 Go', description: 'Accès Internet 100 Go', prix: '72 DT', duree: '30 jours' },
  { id: 2, nom: 'Offre 75 Go', description: 'Accès Internet 75 Go', prix: '55 DT', duree: '30 jours' },
  // Ajouter d'autres offres ici
];

const GestionOffres = () => {
  const [offres, setOffres] = useState(initialOffres);
  const toast = useToast();

  const handleDeleteOffre = (id) => {
    setOffres(offres.filter(offre => offre.id !== id));
    toast({
      title: 'Offre supprimée.',
      description: 'L\'offre a été supprimée avec succès.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <VStack align="stretch" spacing={4}>
        {offres.map(offre => (
          <Box key={offre.id} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <HStack justifyContent="space-between">
              <VStack align="start">
                <Text fontWeight="bold">Nom: {offre.nom}</Text>
                <Text>Description: {offre.description}</Text>
                <Text>Prix: {offre.prix}</Text>
                <Text>Durée: {offre.duree}</Text>
              </VStack>
              <Button colorScheme="red" onClick={() => handleDeleteOffre(offre.id)}>
                Supprimer
              </Button>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default GestionOffres;
