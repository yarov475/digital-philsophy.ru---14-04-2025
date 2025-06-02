import { Box, Flex, Link as ChakraLink, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Box bg="gray.800" py={4}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <ChakraLink as={Link} to="/" fontSize="xl" color="white">
            Digital Philosophy
          </ChakraLink>
          <Flex gap={6}>
            <ChakraLink as={Link} to="/speakers" color="white">
              Speakers
            </ChakraLink>
            <ChakraLink as={Link} to="/about" color="white">
              About
            </ChakraLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar