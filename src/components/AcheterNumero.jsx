import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Input,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
import puce from '../images/puce.jpeg';

const mobileNumbers = [
  '+216 57689238',
  '+216 12345678',
  '+216 87654321',
  '+216 23456789',
  '+216 34567890',
  '+216 45678901',
  '+216 56789012',
  '+216 67890123',
  '+216 78901234',
  '+216 89012345',
  '+216 57689238',
  '+216 12345678',
  '+216 87654321',
  '+216 23456789',
  '+216 34567890',
  '+216 45678901',
  '+216 56789012',
  '+216 67890123',
  '+216 78901234',
  '+216 89012345',
  '+216 57689238',
  '+216 12345678',
  '+216 87654321',
  '+216 23456789',
  '+216 34567890',
  '+216 45678901',
  '+216 56789012',
  '+216 67890123',
  '+216 78901234',
  '+216 89012345',
  '+216 57689238',
  '+216 12345678',
  '+216 87654321',
  '+216 23456789',
  '+216 34567890',
  '+216 45678901',
  '+216 56789012',
  '+216 67890123',
  '+216 78901234',
  '+216 89012345',
  // Add more numbers as needed
];
const decription = () => {
  return(
<div>
description
</div>
  )

};

const MobileNumberCard = ({ number }) => (
  <Box
  onTouchMove={decription()}
    p={4}
    bg="white"
    shadow="md"
    borderWidth="1px"
    borderRadius="md"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    minH="200px"
  >
    <Image src={puce} alt="Orange SIM" boxSize="50px" mb={4} />
    <Text fontSize="lg" fontWeight="bold" textAlign="center" mb={4}>
      {number}
    </Text>
    <Button colorScheme="orange" size="sm">
      Acheter ce numéro
    </Button>
  </Box>
);

const AcheterNumero = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numbersPerPage] = useState(12); // Updated to 12 numbers per page
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const filteredNumbers = mobileNumbers.filter((number) =>
    number.includes(searchQuery)
  );

  const indexOfLastNumber = currentPage * numbersPerPage;
  const indexOfFirstNumber = indexOfLastNumber - numbersPerPage;
  const currentNumbers = filteredNumbers.slice(indexOfFirstNumber, indexOfLastNumber);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredNumbers.length / numbersPerPage);


  return (
    <>
      <Header />
      <Center minHeight="100vh" bg="gray.100" p={4}>
        <Box width="100%" >
          <Stack spacing={4} mb={4}>
            <Input
              placeholder="Search for a number"
              value={searchQuery}
              onChange={handleSearchChange}
              width="50%"
              mx="auto"
            />
            <Button colorScheme="orange" onClick={() => setCurrentPage(1)} mx="auto">
              Search
            </Button>
          </Stack>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
            {currentNumbers.length > 0 ? (
              currentNumbers.map((number, index) => (
                <MobileNumberCard key={index} number={number} />
              ))
            ) : (
              <Text>No numbers found</Text>
            )}
          </Grid>
          <Flex justifyContent="center" mt={4}>
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index}
                mx={1}
                colorScheme="orange"
                variant={currentPage === index + 1 ? 'solid' : 'outline'}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </Flex>
        </Box>
      </Center>
      <Footer />
    </>
  );
};

export default AcheterNumero;
