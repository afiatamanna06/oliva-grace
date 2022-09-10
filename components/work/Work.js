import { Box, Image, Flex, Center } from '@chakra-ui/react'
import WorkDescription from './WorkDescription'

function Work() {
  return (
    <Box bgColor="#F2E9E4" w="full" h={["65rem", "65rem", "65rem", "32rem", "32rem"]} my="20rem" position="relative">
        <Image src="/Work_bg.png" zIndex={1} w="30rem" objectFit="cover" h="40rem" position="absolute" top={["20%", "20%", "20%", "-25%", "-25%"]} left={["0%", "0%", "0%", "35%", "35%"]} alt="" />
        <Box w="full" position="relative" zIndex={1}>
          <Center>
              <Flex h="40rem" maxW="70rem" alignItems="center" direction={["column", "column", "column", "row", "row"]} gap={[8, 8, 8, 20, 20]}>
                  <Box flex="1" mt="20" maxW={["25rem", "25rem", "28rem", "30rem", "30rem"]} h={["25rem", "25rem", "28rem", "30rem", "30rem"]}>
                      <WorkDescription />
                  </Box>
                  <Box bg="white" p="5">
                    <Image src="/Work_img.png" objectFit="cover" w="20rem" h="30rem" alt="" />
                  </Box>
              </Flex>
          </Center>
        </Box>
    </Box>
  )
}

export default Work