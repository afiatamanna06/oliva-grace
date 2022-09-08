import {  Button, Flex, Box, Link as ChakraLink, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import SocialSites from '../common/SocialSites'
import navigationLinks from './NavigationLinks'

function NavigationBar() {
  return (
    <Flex position="fixed" alignItems="center" justify="space-between" bgColor="#F2E9E4" w="full" p="3">
        <SocialSites />
        <Flex gap={100} alignItems="center" justify="center">
            {navigationLinks.slice(0, 2).map(({name, path}) => (
                <Link key={name} href={path} passHref>
                    <ChakraLink>{name}</ChakraLink>
                </Link>
            ))}
            <Link href="/" passHref>
                <Heading>OLIVA GRACE</Heading>
            </Link>
            {navigationLinks.slice(2, 4).map(({name, path}) => (
                <Link key={name} href={path} passHref>
                    <ChakraLink>{name}</ChakraLink>
                </Link>
            ))}
        </Flex>
    </Flex>
  )
}

export default NavigationBar