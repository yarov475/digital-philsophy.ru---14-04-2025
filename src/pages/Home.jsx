import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

function Home() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl">
          Digital Philosophy Conference 2025
        </Heading>
        <Text fontSize="xl">
          Welcome to the conference on "Philosophical Aspects of AI Language Models"
        </Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About the Conference
          </Heading>
          <Text>
            Join us for an exploration of the philosophical implications of artificial intelligence
            and language models. Leading experts and researchers will discuss the intersection of
            philosophy, technology, and consciousness.
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}

export default Home