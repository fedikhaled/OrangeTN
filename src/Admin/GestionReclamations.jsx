import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Input,
  Select,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

const initialReclamations = [
  {
    id: 1,
    description: "Problème avec la connexion Internet.",
    date: "2024-08-01",
    statut: "En attente",
    user: {
      nom: 'John',
      prenom: 'Doe',
      cin: '12345678',
    }
  },
  {
    id: 2,
    description: "Facture incorrecte pour le mois dernier.",
    date: "2024-08-02",
    statut: "Résolu",
    user: {
      nom: 'Jane',
      prenom: 'Smith',
      cin: '87654321',
    }
  },
  // Ajouter d'autres réclamations ici
];

const GestionReclamations = () => {
  const [reclamations, setReclamations] = useState(initialReclamations);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("Toutes");
  const [showMore, setShowMore] = useState({});
  const [selectedReclamation, setSelectedReclamation] = useState(null);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDateChange = (event) => {
    setFilterDate(event.target.value);
  };

  const handleStatusChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleDeleteReclamation = (id) => {
    setReclamations(reclamations.filter(reclamation => reclamation.id !== id));
    onClose();
    toast({
      title: "Réclamation supprimée.",
      description: "La réclamation a été supprimée avec succès.",
      status: "success",
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

  const handleOpenDeleteModal = (reclamation) => {
    setSelectedReclamation(reclamation);
    onOpen();
  };

  const filteredReclamations = reclamations.filter(reclamation => {
    return (
      (filterStatus === "Toutes" || reclamation.statut === filterStatus) &&
      (filterDate === "" || reclamation.date === filterDate) &&
      (reclamation.user.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
       reclamation.user.prenom.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <Box p={4}>
      <HStack spacing={4} mb={4}>
        <Input
          placeholder="Rechercher par nom..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Input
          type="date"
          placeholder="Filtrer par date"
          value={filterDate}
          onChange={handleDateChange}
          w="200px"
        />
        <Select
          value={filterStatus}
          onChange={handleStatusChange}
          w="200px"
        >
          <option value="Toutes">Toutes</option>
          <option value="En attente">En attente</option>
          <option value="Résolu">Résolu</option>
        </Select>
      </HStack>
      <VStack align="stretch" spacing={4}>
        {filteredReclamations.map(reclamation => (
          <Box key={reclamation.id} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <HStack justifyContent="space-between">
              <VStack align="start">
                <Text fontWeight="bold">Date: {reclamation.date}</Text>
                <Text>
                  Description: {showMore[reclamation.id] || reclamation.description.length <= 30 ? reclamation.description : `${reclamation.description.substring(0, 30)}...`}
                  {reclamation.description.length > 30 && (
                    <Button variant="link" colorScheme="orange" size="sm" onClick={() => handleShowMoreToggle(reclamation.id)}>
                      {showMore[reclamation.id] ? "Afficher moins" : "Afficher plus"}
                    </Button>
                  )}
                </Text>
                <Text>Statut: {reclamation.statut}</Text>
                <Text>Nom: {reclamation.user.nom}</Text>
                <Text>Prénom: {reclamation.user.prenom}</Text>
                <Text>CIN: {reclamation.user.cin}</Text>
              </VStack>
              <Button colorScheme="red" onClick={() => handleOpenDeleteModal(reclamation)}>
                Supprimer
              </Button>
            </HStack>
          </Box>
        ))}
      </VStack>

      {/* Modal de suppression */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmer la suppression</ModalHeader>
          <ModalBody>
            Êtes-vous sûr de vouloir supprimer cette réclamation ?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={() => handleDeleteReclamation(selectedReclamation?.id)}>
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

export default GestionReclamations;
