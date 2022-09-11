import { Flex, Image, Box, Center } from '@chakra-ui/react'
import React from 'react'
import AboutDescription from './AboutDescription'

function About() {
  return (
    <Box m="8" pt={["20", "20", "20", "128", "128"]} pb="70">
        <Center>
            <Flex maxH="30rem" maxW="70rem" alignItems="center" direction={["column", "column", "column", "row", "row"]} gap={[8, 8, 8, 28, 28]}>
                <Image src="/about_img.png" flex="1" objectFit="cover" w="30rem" h="30rem" alt="" />
                <Box flex="1" maxW={["25rem", "25rem", "28rem", "30rem", "30rem"]} h={["25rem", "25rem", "28rem", "30rem", "30rem"]}>
                    <AboutDescription />
                </Box>
            </Flex>
        </Center>
    </Box>
  )
}

export default About