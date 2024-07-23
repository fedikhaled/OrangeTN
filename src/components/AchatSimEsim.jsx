import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
const SimEsimForm = () => {
  const [showSimForm, setShowSimForm] = useState(false);
  const [showEsimForm, setShowEsimForm] = useState(false);

  const handleSimFormClick = () => {
    setShowSimForm(true);
    setShowEsimForm(false);
  };

  const handleEsimFormClick = () => {
    setShowSimForm(false);
    setShowEsimForm(true);
  };

  return (
    <Box>
    <Header/>
    <Box margin="20px">
    
    <center >
      <Button onClick={handleSimFormClick} colorScheme="orange" mr={2}>
        Acheter SIM
      </Button>
      <Button onClick={handleEsimFormClick} colorScheme="orange">
        Acheter eSIM
      </Button>

      {showSimForm && (
        <Box mt={4}>
          <FormControl>
            <FormLabel>Nom</FormLabel>
            <Input type="text" placeholder="Nom" />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Adresse</FormLabel>
            <Input type="text" placeholder="Adresse" />
          </FormControl>
          {/* Add more fields for SIM form */}
        </Box>
      )}

      {showEsimForm && (
        <Box mt={4}>
          <FormControl>
            <FormLabel>Nom</FormLabel>
            <Input type="text" placeholder="Nom" />
          </FormControl>
          <FormControl>
            <FormLabel>Nom</FormLabel>
            <Input type="text" placeholder="Nom" />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Adresse</FormLabel>
            <Input type="text" placeholder="Adresse" />
          </FormControl>
          {/* Add more fields for eSIM form */}
        </Box>
      )}
      </center>
    
    </Box>
    <Footer/>
   </Box>
  );
};

export default SimEsimForm;