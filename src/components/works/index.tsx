import { SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import Work from './work';

function Works(): JSX.Element {
  return (
    <VStack as="section" w="full" spacing={4} align="initial">
      <h2>Works</h2>
      <SimpleGrid columns={[1, null, null, 2, 3]} justifyItems={['initial', null, 'center', 'initial']} w="full" gap={6}>
        <Work />
        <Work />
        <Work />
      </SimpleGrid>
    </VStack>
  );
}

export default Works;
