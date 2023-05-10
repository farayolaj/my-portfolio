import { SimpleGrid, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import profile from '@data/profile';
import Work from './work';

const Works: FC = () => {
  const data = profile.works;

  return (
    <VStack as="section" w="full" spacing={4} align="initial" id="works">
      <h2>Works</h2>
      <SimpleGrid w="full" gap={12} columns={1}>
        {data.map(work => (
          <Work {...work} key={work.title} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Works;
