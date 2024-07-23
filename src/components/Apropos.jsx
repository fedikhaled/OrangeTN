import React from 'react';
import { Box, Flex, Text, Heading, Button, Container, SimpleGrid } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';

const AboutUs = () => {
  return (
    <Box bg="white" color="black" >
      <Header />
      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
          <Box>
            <Heading fontSize="3xl" mb={4}>All the Perks</Heading>
            <Text fontSize="md" color="gray.700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </Text>
          </Box>
          <Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Box p={4} border="1px" borderColor="gray.300" borderRadius="md">
                <Heading fontSize="xl" mb={2} color="orange.500">Amazing Theaters</Heading>
                <Text fontSize="sm" color="gray.700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
              </Box>
              <Box p={4} border="1px" borderColor="gray.300" borderRadius="md">
                <Heading fontSize="xl" mb={2} color="orange.500">Pre Order Food</Heading>
                <Text fontSize="sm" color="gray.700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
              </Box>
              <Box p={4} border="1px" borderColor="gray.300" borderRadius="md">
                <Heading fontSize="xl" mb={2} color="orange.500">Comfort Amenities</Heading>
                <Text fontSize="sm" color="gray.700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
              </Box>
              <Box p={4} border="1px" borderColor="gray.300" borderRadius="md">
                <Heading fontSize="xl" mb={2} color="orange.500">Movie Goer Rewards</Heading>
                <Text fontSize="sm" color="gray.700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
              </Box>
              <Box p={4} border="1px" borderColor="gray.300" borderRadius="md">
                <Heading fontSize="xl" mb={2} color="orange.500">Artisan Snacks</Heading>
                <Text fontSize="sm" color="gray.700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        <Box textAlign="center" mb={10}>
          <Heading fontSize="3xl" mb={4}>OUR STORY</Heading>
          <Text fontSize="md" color="gray.700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </Text>
        </Box>

        <Box textAlign="center" mb={10}>
          <Text fontSize="sm" letterSpacing="wider" color="orange.500">HAPPY VIEWERS</Text>
          <Heading fontSize="3xl" mb={4}>Why Choose Us</Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
          <Box p={4} border="1px" borderColor="orange.500" borderRadius="md">
            <Text fontSize="sm" color="gray.700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </Text>
          </Box>
          <Box p={4} border="1px" borderColor="orange.500" borderRadius="md">
            <Text fontSize="sm" color="gray.700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </Text>
          </Box>
          <Box p={4} border="1px" borderColor="orange.500" borderRadius="md">
            <Text fontSize="sm" color="gray.700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </Text>
          </Box>
        </SimpleGrid>

        <Box textAlign="center">
          <Button colorScheme="orange" variant="solid" size="lg">SEE ALL OFFERS AND PROMOTIONS</Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default AboutUs;
