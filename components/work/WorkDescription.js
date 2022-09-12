import { Box, Heading, Button } from "@chakra-ui/react"
import Link from "next/link"

function WorkDescription() {
  return (
    <Box bg="white" p="12" maxW="23rem" fontFamily="'Poppins', sans-serif">
        <Heading mb="4" fontFamily="'Poppins', sans-serif" letterSpacing={3} fontSize="2xl" fontWeight="semibold">LET&apos;S WORK TOGETHER</Heading>
        <Box mb="6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi neque eget dictum enim. </Box>
        <Link href="#contact" passHref>
          <Button borderRadius="none" fontSize="xl" bg="#252525" color="white" px="12" py="6" _hover={{ opacity: ".8" }} _focus={{ opacity: ".8" }}>LET&apos;S CHAT</Button>
        </Link>
    </Box>
  )
}

export default WorkDescription