import React, { useState } from 'react';
import { Box, Button, VStack, HStack } from '@chakra-ui/react';
import VerifiedAccountsList from './VerifiedAccountsList';
import WaitingForApprovalList from './WaitingForApprovalList';

const GererClients = () => {
  const [activeTab, setActiveTab] = useState('verified');

  return (
    <Box p={4}>
      <HStack spacing={4} mb={6}>
        <Button colorScheme="orange" onClick={() => setActiveTab('verified')}>
          Comptes Vérifiés
        </Button>
        <Button colorScheme="orange" onClick={() => setActiveTab('waiting')}>
          Comptes en Attente
        </Button>
      </HStack>
      {activeTab === 'verified' && <VerifiedAccountsList />}
      {activeTab === 'waiting' && <WaitingForApprovalList />}
    </Box>
  );
};

export default GererClients;
