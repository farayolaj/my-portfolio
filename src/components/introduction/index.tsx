import { Text, VStack } from '@chakra-ui/react';
import React from 'react';

function Introduction(): JSX.Element {
  return (
    <VStack as="section" px={8} spacing={4} align="initial">
      <h2>Introduction</h2>
      <Text>
        I am a fullstack web developer that loves
        building scalable systems and products that offer value.
      </Text>
    </VStack>
  );
}

export default Introduction;
