import { Flex, Image, Heading, Box } from '@chakra-ui/react'

function ServicesCard({ image, title, description, price }) {
  return (
    <Flex minH="30rem" w="17rem" direction="column">
        <Image mb="2" src={image} alt="" />
        <Heading mb="2" fontFamily="'Poppins', sans-serif" fontSize="2xl" fontWeight="semibold" letterSpacing={2}>{title}</Heading>
        <Box mb="4">{description}</Box>
        <Heading fontFamily="'Poppins', sans-serif" fontSize="lg" fontWeight="bold" letterSpacing={2}>{price}</Heading>
    </Flex>
  )
}

export default ServicesCard