import React from 'react';
import { Box, Text, VStack, Badge, Image } from '@chakra-ui/react';
import defaultImage from '../../images/contrat.png'; // Update the path to your default image

const ContratCard = ({ contrat }) => {
  if (!contrat) {
    return null; // Ensure we don't render anything if contrat is undefined
  }

  return (
    <Box
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      p={4}
      textAlign="center"
      bg="white"
      w="200px"
    >
      <VStack spacing={3}>
        <Text fontSize="lg" fontWeight="bold" color="orange.500">
          Code: {contrat.code}
        </Text>
        <Image src={defaultImage} alt="Contrat" boxSize="150px" />
        <Text fontSize="sm" color="gray.500">
          Status: {contrat.status}
        </Text>
        <Badge colorScheme={contrat.status === 'expiré' ? 'red' : 'green'}>
          {contrat.status}
        </Badge>
      </VStack>
    </Box>
  );
};

export default ContratCard;
