import { Box, Center, Flex, Heading, IconButton } from "@chakra-ui/react"
import Carousel from 'nuka-carousel'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonial() {
  return (
    <Box w="full" mb="10rem">
        <Center>
            <Box maxW={["100%", "100%", "100%", "60rem", "60rem"]}>
                <Carousel 
                    autoplay={true}
                    renderCenterLeftControls={
                    ({ previousSlide }) => (
                        <IconButton
                        aria-label="Previous slide"
                        icon={<FiChevronLeft size={60} />}
                        onClick={previousSlide}
                        color="black"
                        colorScheme="skyblue"
                        sx={{
                            transform: ["none", "none", "translate(-50%, 0)", "translate(-50%, 0)"],
                        }}
                        />
                    )
                    }
                    renderCenterRightControls={
                    ({ nextSlide }) => (
                        <IconButton
                        aria-label="Next slide"
                        icon={<FiChevronRight size={60} />}
                        onClick={nextSlide}
                        color="black"
                        colorScheme="skyblue"
                        sx={{
                            transform: ["none", "none", "translate(50%, 0)", "translate(50%, 0)"],
                        }}
                        />
                    )
                    } 
                    wrapAround>
                    <Center pb="50">
                        <Flex direction="column" px={["12", "12", "12", "20", "40"]}>
                            <Heading textAlign="center" mb="4">WHAT MY CLIENTS ARE SAYING</Heading>
                            <Box textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis augue bibendum pulvinar ut egestas lorem arcu maecenas. Elementum et, phasellus pharetra, lobortis facilisis condimentum non ullamcorper. Proin commodo malesuada maecenas dis vitae. Ornare quam senectus in convallis.</Box>
                        </Flex>
                    </Center>
                    <Center pb="50">
                        <Flex direction="column" px={["12", "12", "12", "20", "40"]}>
                            <Heading textAlign="center" mb="4">WHAT MY CLIENTS ARE SAYING</Heading>
                            <Box textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis augue bibendum pulvinar ut egestas lorem arcu maecenas. Elementum et, phasellus pharetra, lobortis facilisis condimentum non ullamcorper. Proin commodo malesuada maecenas dis vitae. Ornare quam senectus in convallis.</Box>
                        </Flex>
                    </Center>
                    <Center pb="50">
                        <Flex direction="column" px={["12", "12", "12", "20", "40"]}>
                            <Heading textAlign="center" mb="4">WHAT MY CLIENTS ARE SAYING</Heading>
                            <Box textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis augue bibendum pulvinar ut egestas lorem arcu maecenas. Elementum et, phasellus pharetra, lobortis facilisis condimentum non ullamcorper. Proin commodo malesuada maecenas dis vitae. Ornare quam senectus in convallis.</Box>
                        </Flex>
                    </Center>
                </Carousel>
            </Box>
        </Center>
    </Box>
  )
}

export default Testimonial