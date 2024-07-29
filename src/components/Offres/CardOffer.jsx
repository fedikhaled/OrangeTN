import React from 'react';
import { Box, Text, VStack, Badge, Button } from '@chakra-ui/react';

const CardOffer = ({ offer, onAcheterClick }) => {
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
          Option
        </Text>
        <Text fontSize="sm" color="gray.500">
          Internet Mobile
        </Text>
        <Text fontSize="sm" color="gray.500" fontWeight="bold">
          *124#
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color="orange.500">
          {offer.data} Go
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="black">
          {offer.price} DT
        </Text>
        <Text fontSize="sm" color="gray.500">
          Valable {offer.validity} jours
        </Text>
        {offer.isNew && <Badge colorScheme="green">NOUVEAU</Badge>}
        <Button colorScheme="orange" variant="solid" size="sm" mt={4} onClick={onAcheterClick}>
          Acheter
        </Button>
      </VStack>
    </Box>
  );
};

export default CardOffer;
