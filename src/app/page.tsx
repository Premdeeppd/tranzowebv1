// app/page.tsx
import { Box, SimpleGrid } from '@chakra-ui/react';
import TripCard from '../components/TripCard';
import trips from '../data/trips.json';

export default function Home() {
  return (
    <Box p={6}>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
        {trips.map(trip => (
          <TripCard key={trip.id} {...trip} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
