import { Container, SimpleGrid, Box, Heading, Text, Image, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { speakers } from '../data/speakers'

function Speakers() {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading mb={8}>Conference Speakers</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {speakers.map((speaker) => (
          <Box key={speaker.id} borderWidth={1} borderRadius="lg" overflow="hidden">
            <Image src={speaker.image} alt={speaker.name} />
            <Box p={6}>
              <Heading size="md" mb={2}>
                <Link as={RouterLink} to={`/speakers/${speaker.id}`}>
                  {speaker.name}
                </Link>
              </Heading>
              <Text noOfLines={3}>{speaker.topic}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Speakers