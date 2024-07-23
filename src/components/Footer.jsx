// Footer.js
import React from 'react';
import { Box, Container, Stack, Link, IconButton, Text, Divider, Flex, Button, Image } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';

const Footer = () => {
    return (
        <Box bg="black" color="white" py={10}>
            <Container maxW="container.xl">
                <Stack direction={{ base: 'column', md: 'row' }} spacing={8} justify="space-between" align="center">
                    <Stack direction="row" spacing={6}>
                        <Link href="#" isExternal>
                            <IconButton
                                variant="ghost"
                                color="white"
                                aria-label="Facebook"
                                icon={<FaFacebook />}
                                _hover={{ color: 'orange.400' }}
                            />
                        </Link>
                        <Link href="#" isExternal>
                            <IconButton
                                variant="ghost"
                                color="white"
                                aria-label="Instagram"
                                icon={<FaInstagram />}
                                _hover={{ color: 'orange.400' }}
                            />
                        </Link>
                        <Link href="#" isExternal>
                            <IconButton
                                variant="ghost"
                                color="white"
                                aria-label="LinkedIn"
                                icon={<FaLinkedin />}
                                _hover={{ color: 'orange.400' }}
                            />
                        </Link>
                        <Link href="#" isExternal>
                            <IconButton
                                variant="ghost"
                                color="white"
                                aria-label="YouTube"
                                icon={<FaYoutube />}
                                _hover={{ color: 'orange.400' }}
                            />
                        </Link>
                    </Stack>

                    <Flex>
                        <Button
                            as="a"
                            href="#"
                            variant="ghost"
                            color="white"
                            leftIcon={<SiAppstore />}
                            _hover={{ color: 'orange.400' }}
                        >
                            App Store
                        </Button>
                        <Button
                            as="a"
                            href="#"
                            variant="ghost"
                            color="white"
                            leftIcon={<SiGoogleplay />}
                            _hover={{ color: 'orange.400' }}
                        >
                            Google Play
                        </Button>
                    </Flex>
                </Stack>

                <Divider my={6} borderColor="gray.600" />

                <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
                    <Stack spacing={6}>
                        <Text>Offres et services</Text>
                        <Link href="#">Mobile prépayé</Link>
                        <Link href="#">Mobile postpayé</Link>
                        <Link href="#">Fixbox</Link>
                        <Link href="#">Flybox postpayée</Link>
                        <Link href="#">Flybox prépayée</Link>
                        <Link href="#">Darbox Plus</Link>
                        <Link href="#">Airbox</Link>
                    </Stack>

                    <Stack spacing={6}>
                        <Text>Appareils</Text>
                        <Link href="#">Tous les mobiles</Link>
                        <Link href="#">Tous les accessoires</Link>
                    </Stack>

                    <Stack spacing={6}>
                        <Text>Réseaux</Text>
                        <Link href="#">Couverture mobile</Link>
                        <Link href="#">Couverture Fixbox</Link>
                    </Stack>

                    <Stack spacing={6}>
                        <Text>Services</Text>
                        <Link href="#">Orange fidélité</Link>
                        <Link href="#">Assistance</Link>
                        <Link href="#">Orange place</Link>
                        <Link href="#">Services pratiques</Link>
                    </Stack>
                </Flex>

                <Divider my={6} borderColor="gray.600" />

                <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
                    <Text>© Orange 2024</Text>
                    <Stack direction="row" spacing={4}>
                        <Link href="#">Informations légales</Link>
                        <Link href="#">Conditions générales</Link>
                        <Link href="#">Fondation Orange</Link>
                        <Link href="#">Carrières</Link>
                        <Link href="#">Actualités</Link>
                        <Link href="#">Orange Developer Center</Link>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
