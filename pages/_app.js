import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavigationBar from '../components/navigation/NavigationBar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavigationBar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
