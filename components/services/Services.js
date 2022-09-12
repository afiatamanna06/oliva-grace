import { Box, Center, IconButton, useBreakpointValue } from '@chakra-ui/react'
import Carousel from 'nuka-carousel'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ServicesCard from './ServicesCard';
import servicesList from './ServicesList';

function Services() {

    const numberOfCarouselComponents = useBreakpointValue({
        base: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 3,
      });
    
  return (
    <Box w="full" id="services" fontFamily="'Poppins', sans-serif" pt={[300, 300, 300, 100, 100]} position="relative">
        <Box minH="25rem" w="17rem" zIndex={-10} position="absolute" bg="#F2E9E4" top={["25%", "25%", "25%", "5%", "5%"]} left={["5%", "5%", "5%", "13%", "13%"]}></Box>
        <Center>
            <Box maxW={["100%", "100%", "100%", "65rem", "65rem"]}>
                <Carousel 
                    autoplay={true}
                    slidesToShow={numberOfCarouselComponents}
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
                    {servicesList.map(({image, title, description, price}) => (
                        <Center pb="20" key={title}>
                            <ServicesCard image={image} title={title} description={description} price={price} />
                        </Center>
                    ))}
                </Carousel>
            </Box>
        </Center>
    </Box>
  )
}

export default Services