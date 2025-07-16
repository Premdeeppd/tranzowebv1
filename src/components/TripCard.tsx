// components/TripCard.tsx
import {
  Box, Card, CardBody, CardFooter, Image, Flex,
  Tag, Button, Heading, Text, Stack, HStack
} from '@chakra-ui/react';

type TripProps = {
  title: string;
  description: string;
  date: string;
  duration: string;
  price: string;
  joined: number;
  capacity: number;
  tags: string[];
  image: string;
};

const TripCard = ({
  title, description, date, duration, price, joined, capacity, tags, image
}: TripProps) => (
  <Card maxW="xs" minW="270px" boxShadow="md" borderRadius="lg" overflow="hidden">
    <Image src={image} alt={title} width="100%" height="170px" objectFit="cover" />
    <CardBody>
      <HStack spacing={2} mb={2}>
        {tags.map(tag => (
          <Tag key={tag} size="sm" colorScheme="teal">{tag}</Tag>
        ))}
      </HStack>
      <Heading fontSize="lg">{title}</Heading>
      <Text color="gray.500" fontSize="sm" mt={1}>{date} • {duration}</Text>
      <Text fontSize="sm" mt={2}>{description}</Text>
    </CardBody>
    <CardFooter align="center" justify="space-between">
      <Text color="green.500" fontWeight="bold">{price}</Text>
      <Text fontSize="xs" color="gray.500">{joined}/{capacity} joined</Text>
      <Stack direction="row" spacing={2}>
        <Button size="sm" variant="outline">View</Button>
        <Button size="sm" colorScheme="blue">Join</Button>
      </Stack>
    </CardFooter>
  </Card>
);

export default TripCard;
