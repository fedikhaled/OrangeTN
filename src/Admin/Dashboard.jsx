import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import GererClients from './ManageClients';
import GestionContrats from './GestionContrats';
import GestionOffres from './GestionOffres';
import GestionReclamations from './Reclamation/GestionReclamations';

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('');

  const renderContent = () => {
    switch (activeComponent) {
      case 'clients':
        return <GererClients />;
      case 'offres':
        return <GestionOffres />;
      case 'contrats':
        return <GestionContrats />;
      case 'reclamations':
        return <GestionReclamations />;
      default:
        return <Box p={4}><p>Sélectionnez une option du menu</p></Box>;
    }
  };

  return (
    <Flex minH="100vh">
      <Sidebar setActiveComponent={setActiveComponent} />
      <Box flex="1" p={4}>
        {renderContent()}
      </Box>
    </Flex>
  );
};

export default AdminDashboard;
