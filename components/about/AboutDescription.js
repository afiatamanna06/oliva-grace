import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"

function AboutDescription() {
  return (
    <Box w="full" id="about" bg="#F2E9E4" h={["25rem", "25rem", "25rem", "30rem", "30rem"]}>
        <Center>
            <Flex direction="column" fontFamily="'Poppins', sans-serif" alignItems="center" justify="center" h={["25rem", "25rem", "25rem", "30rem", "30rem"]} p="9">
                <Heading mb="4" letterSpacing={4} fontSize="3xl">ABOUT ME</Heading>
                <Box mb="6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi neque eget dictum enim. Sagittis volutpat, eu, tortor gravida facilisi orci. Imperdiet fermentum commodo platea velit sed porttitor. Ullamcorper in proin quis aliquam ac.</Box>
                <Link href="#contact" passHref>
                  <Button borderRadius="none" fontSize="xl" bg="#252525" color="white" px="12" py="6" _hover={{ opacity: ".8" }} _focus={{ opacity: ".8" }}>LET&apos;S CHAT</Button>
                </Link>
            </Flex>
        </Center>
    </Box>
  )
}

export default AboutDescription