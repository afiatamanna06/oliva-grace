import '../styles/globals.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import NavigationBar from '../components/navigation/NavigationBar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box w="full" minH="100vh">
        <NavigationBar />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
