import { Flex, Image, Heading, Box } from '@chakra-ui/react'

function ServicesCard({ image, title, description, price }) {
  return (
    <Flex minH="30rem" w="15rem" direction="column">
        <Image mb="2" src={image} alt="" />
        <Heading mb="2">{title}</Heading>
        <Box mb="2">{description}</Box>
        <Heading>{price}</Heading>
    </Flex>
  )
}

export default ServicesCard