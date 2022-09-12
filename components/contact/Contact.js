import { Box, Center, Flex, Heading, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import SocialSites from '../common/SocialSites'
import navigationLinks from '../navigation/NavigationLinks'

const contactImages = ["/contact_1.png", "/contact_2.png", "/contact_3.png", "/contact_4.png", "/contact_5.png"]

function Contact() {
  return (
    <Box h={["65rem", "55rem", "35rem", "20rem", "20rem"]} fontFamily="'Poppins', sans-serif" letterSpacing={[1, 1, 1, 1, 3]} id="contact" bgColor="#F2E9E4" w="full" pt="100">
        <Center>
            <Flex maxH={["full", "full", "full", "30rem", "30rem"]} maxW={["full", "full", "full", "95rem", "95rem"]} alignItems="center" direction="column">
                <Heading mb="8" textAlign="center" fontFamily="'Poppins', sans-serif" letterSpacing={3} fontSize="2xl" fontWeight="semibold">FOLLOW ME @OLIVAGRACE</Heading>
                <Flex wrap="wrap" gap={14} justify="center" w="full">
                    {contactImages.map((item) => (
                      <Image key={item} w="15rem" h="12rem" objectFit="cover" src={item} alt="" />
                    ))}
                </Flex>
            </Flex>
        </Center>
        <Center>
          <Flex direction={["column", "column", "column", "row", "row"]} mt="16" mb="10" gap={[5, 5, 5, 0, 0]} justify="space-between" alignItems="center" w={["full", "full", "full", "89rem", "89rem"]}>
              <Flex gap={10} fontWeight="medium">
                    {navigationLinks.map(({name, path}) => (
                        <Link key={name} href={path} passHref>
                            <ChakraLink>{name}</ChakraLink>
                        </Link>
                    ))}
              </Flex>
              <SocialSites color="rgba(0, 0, 0, 1)" />
              <Box letterSpacing={3}>COPYRIGHT @2022 | OLIVIAGRACE</Box>
          </Flex>
        </Center>
    </Box>
  )
}

export default Contact