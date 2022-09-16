import {  Button, Flex, Box, Link as ChakraLink, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from "react"
import { FiMenu, FiSearch } from "react-icons/fi"
import SocialSites from '../common/SocialSites'
import navigationLinks from './NavigationLinks'

function NavigationBar() {

    const [responsiveDisplay, setDisplay] = useState("none")

  return (
      <Flex fontFamily="'Poppins', sans-serif" letterSpacing={[3, 3, 3, 2, 2, 2,  3]} position="fixed" zIndex={100} top="0" direction="column" justify="space-between" bgColor="#F2E9E4" w="full" h={ responsiveDisplay === "none" ? "min-content" : ["100vh", "100vh", "100vh", "min-content", "min-content"]} p="3" px="8">
        <Flex alignItems="center" justify="space-between" display={["flex", "flex", "flex", "none", "none"]}>
            <Box onClick={() => { responsiveDisplay === "none" ? setDisplay("flex") : setDisplay("none")}}><FiMenu /></Box>
            <Box>
                <InputGroup>
                    <Input 
                        w="10rem" 
                        placeholder="Search" 
                        _placeholder={{ color: "rgba(0, 0, 0, .85)", fontStyle: "italic", letterSpacing: 3 }} 
                        variant="unstyled"
                        borderRadius="none"
                        _focus={{ bg: "transparent", borderBottom: "1px", borderColor: "rgba(0, 0, 0, .55)" }}/>
                    <InputRightElement position="absolute" top="-2"><FiSearch color="rgba(0, 0, 0, .55)" /></InputRightElement>
                </InputGroup>
            </Box>
        </Flex>
        <Flex direction={["column", "column", "column", "row", "row"]} alignItems={["start", "start", "start", "center", "center"]} justify="space-between" w="full">
            <Flex w={["10%"]} display={["none", "none", "none", "flex", "flex"]}>
                <SocialSites color="rgba(0, 0, 0, .55)" />
            </Flex>
            <Flex gap={[5, 5, 5, 30, 50, 120]} color="rgba(0, 0, 0, .85)" direction={["column", "column", "column", "row", "row"]}  display={[responsiveDisplay, responsiveDisplay, responsiveDisplay, "flex", "flex"]} py={["4", "4", "4", "0", "0"]} alignItems={["start", "start", "start", "center", "center"]} justify={["start", "start", "start", "center", "center"]} w={["75%"]}>
                {navigationLinks.slice(0, 2).map(({name, path}) => (
                    <Link key={name} href={path} passHref>
                        <ChakraLink>{name}</ChakraLink>
                    </Link>
                ))}
                <Link href="/" passHref>
                    <Heading cursor="pointer" fontFamily="'Poppins', sans-serif" letterSpacing={7} color="black" display={["none", "none", "none", "block", "block"]}>OLIVA GRACE</Heading>
                </Link>
                {navigationLinks.slice(2, 4).map(({name, path}) => (
                    <Link key={name} href={path} passHref>
                        <ChakraLink>{name}</ChakraLink>
                    </Link>
                ))}
                <Flex display={["flex", "flex", "flex", "none", "none"]}>
                    <SocialSites color="rgba(0, 0, 0, .55)" />
                </Flex>
            </Flex>
            <Box w="15%">
                <InputGroup>
                    <Input 
                        placeholder="Search" 
                        _placeholder={{ color: "rgba(0, 0, 0, .85)", fontStyle: "italic", letterSpacing: 3 }} 
                        display={["none", "none", "none", "block", "block"]} 
                        variant="unstyled"
                        borderRadius="none"
                        _focus={{ bg: "transparent", borderBottom: "1px", borderColor: "rgba(0, 0, 0, .55)" }}/>
                    <InputRightElement position="absolute" display={["none", "none", "none", "block", "block"]} top="1" left="90%"><FiSearch color="rgba(0, 0, 0, .55)" /></InputRightElement>
                </InputGroup>
            </Box>
        </Flex>
    </Flex>
  )
}

export default NavigationBar