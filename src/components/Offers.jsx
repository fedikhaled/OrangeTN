import React from 'react';
import { Box, Button, Text, Image, Grid, Img } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import edawa5 from '../images/edawa5.png'

const OfferCard = ({ imageSrc, title, description, buttonText }) => (
  <Box
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
    <Image src={imageSrc} alt={title} boxSize="100px" mb={4} />
    <Text fontSize="lg" fontWeight="bold" textAlign="center" mb={4}>
      {title}
    </Text>
    <Text fontSize="md" textAlign="center" mb={4}>
      {description}
    </Text>
    <Button colorScheme="orange" size="sm">
      {buttonText}
    </Button>
  </Box>
);

const ListOffer = ({ offers }) => (
  <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
    {offers.map((offer, index) => (
      <OfferCard
        key={index}
        imageSrc={offer.imageSrc}
        title={offer.title}
        description={offer.description}
        buttonText={offer.buttonText}
      />
    ))}
  </Grid>
);

const Offers = () => {
  const offers = [
    {
      imageSrc: <img src='edawa5'/>,
      title: 'edawa5',
      description: 'Description of Offer 1',
      buttonText: 'Discover',
    },
    {
      imageSrc: 'path/to/image2.png',
      title: 'Offer 2',
      description: 'Description of Offer 2',
      buttonText: 'Discover',
    },
    {
      imageSrc: 'path/to/image1.png',
      title: 'Offer 1',
      description: 'Description of Offer 1',
      buttonText: 'Discover',
    },
    {
      imageSrc: 'path/to/image2.png',
      title: 'Offer 2',
      description: 'Description of Offer 2',
      buttonText: 'Discover',
    },
    {
      imageSrc: 'path/to/image1.png',
      title: 'Offer 1',
      description: 'Description of Offer 1',
      buttonText: 'Discover',
    },
    {
      imageSrc: 'path/to/image2.png',
      title: 'Offer 2',
      description: 'Description of Offer 2',
      buttonText: 'Discover',
    },
    {
      imageSrc: 'path/to/image1.png',
      title: 'Offer 1',
      description: 'Description of Offer 1',
      buttonText: 'Discover',
    },
    {
      imageSrc: 'path/to/image2.png',
      title: 'Offer 2',
      description: 'Description of Offer 2',
      buttonText: 'Discover',
    },
    {
      imageSrc: 'path/to/image1.png',
      title: 'Offer 1',
      description: 'Description of Offer 1',
      buttonText: 'Discover',
    },
    {
      imageSrc: 'path/to/image2.png',
      title: 'Offer 2',
      description: 'Description of Offer 2',
      buttonText: 'Discover',
    },
    // Add more offers as needed
  ];

  return (
    <div>
      <Header/>
      <ListOffer offers={offers} />
      <Footer/>
    </div>
  );
};

export default Offers;