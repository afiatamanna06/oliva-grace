import { Box, Heading, Button } from "@chakra-ui/react"

function WorkDescription() {
  return (
    <Box bg="white" p="12" maxW="23rem">
        <Heading mb="4">LET&apos;S WORK TOGETHER</Heading>
        <Box mb="6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi neque eget dictum enim. </Box>
        <Button borderRadius="none" bg="#252525" color="white" px="12" _hover={{ opacity: ".8" }} _focus={{ opacity: ".8" }}>LET&apos;S CHAT</Button>
    </Box>
  )
}

export default WorkDescription