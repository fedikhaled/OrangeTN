import React from 'react';
import { Box, Image, Text, Button, Center } from '@chakra-ui/react';
import Slider from 'react-slick';
import offre1 from '../images/offre1.jpeg';
import offre2 from '../images/offre2.jpeg';
import offre3 from '../images/offre3.jpeg';
import animated from '../images/animatedimage.png';
const slides = [
  {
      id: 1,
      src: offre1,
      alt: 'Image 1',
      title: 'Title 1',
      subtitle: 'Subtitle 1',
      buttonText: 'Discover 1',
  },
  {
      id: 2,
      src: offre2,
      alt: 'Image 2',
      title: 'Title 2',
      subtitle: 'Subtitle 2',
      buttonText: 'Discover 2',
  },
  {
      id: 3,
      src: offre3,
      alt: 'Image 3',
      title: 'Title 3',
      subtitle: 'Subtitle 3',
      buttonText: 'Discover 3',
  },
  {
      id: 4,
      src: animated,
      alt: 'Image 4',
      title: 'Title 4',
      subtitle: 'Subtitle 4',
      buttonText: 'Discover 4',
  },
];
const Animatedoffers = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
  };

  return (
    <Center>
      <Box maxW="container.xl" mx="auto">
          <Slider {...settings}>
              {slides.map(slide => (
               
                  <Box key={slide.id} position="relative">
                      <Image src={slide.src} alt={slide.alt} w="50%" h="20%" margin="10px" />
                      <Box position="absolute" bottom="20px" left="20px" color="white">
                          <Text fontSize="3xl">{slide.title}</Text>
                          <Text fontSize="xl">{slide.subtitle}</Text>
                          <Button mt={4} colorScheme="orange">{slide.buttonText}</Button>
                      </Box>
                  </Box>
                
              ))}
          </Slider>
      </Box>
      </Center>
  );
};

export default Animatedoffers;
