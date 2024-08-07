import React, { useState } from 'react';
import {
  Box,
  HStack,
  Text,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tag,
  IconButton,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const initialOffres = [
  { id: 1, nom: 'Offre 100 Go', description: 'Accès Internet 100 Go', prix: '72 DT', duree: '30 jours' },
  { id: 2, nom: 'Offre 75 Go', description: 'Accès Internet 75 Go', prix: '55 DT', duree: '30 jours' },
  // Add more offers here
];

const GestionOffres = () => {
  const [offres, setOffres] = useState(initialOffres);
  const [showMore, setShowMore] = useState({});
  const [selectedOffre, setSelectedOffre] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleOpenDeleteModal = (offre) => {
    setSelectedOffre(offre);
    onOpen();
  };

  const handleDeleteOffre = () => {
    setOffres(offres.filter(offre => offre.id !== selectedOffre.id));
    onClose();
    toast({
      title: 'Offre supprimée.',
      description: 'L\'offre a été supprimée avec succès.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleShowMoreToggle = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Box p={4}>
      <HStack spacing={4} mb={6}>
        <Input placeholder="Rechercher par nom..." />
        <Input placeholder="Filtrer par prix" />
      </HStack>

      <Box bg="white" boxShadow="sm" borderRadius="md" overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nom</Th>
              <Th>Description</Th>
              <Th>Prix</Th>
              <Th>Durée</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {offres.map(offre => (
              <Tr key={offre.id}>
                <Td>{offre.nom}</Td>
                <Td>
                  {showMore[offre.id] || offre.description.length <= 30
                    ? offre.description
                    : `${offre.description.substring(0, 30)}...`}
                  {offre.description.length > 30 && (
                    <Button
                      variant="link"
                      colorScheme="orange"
                      size="sm"
                      onClick={() => handleShowMoreToggle(offre.id)}
                    >
                      {showMore[offre.id] ? "Afficher moins" : "Afficher plus"}
                    </Button>
                  )}
                </Td>
                <Td>{offre.prix}</Td>
                <Td>{offre.duree}</Td>
                <Td>
                  <HStack spacing={2}>
                    <IconButton
                      icon={<FaTrash />}
                      colorScheme="red"
                      aria-label="Delete offer"
                      onClick={() => handleOpenDeleteModal(offre)}
                    />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Modal for Deletion */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmer la suppression</ModalHeader>
          <ModalBody>
            Êtes-vous sûr de vouloir supprimer l'offre {selectedOffre?.nom} ?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleDeleteOffre}>
              Supprimer
            </Button>
            <Button variant="ghost" onClick={onClose} ml={3}>
              Annuler
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GestionOffres;
