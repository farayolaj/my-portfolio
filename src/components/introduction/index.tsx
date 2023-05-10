import profile from '@data/profile';
import { Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

const Introduction: FC = () => {
  const intro = profile.introduction;

  return (
    <VStack as="section" w="full" spacing={4} align="initial" id="introduction">
      <h2>Introduction</h2>
      <VStack spacing="0.375rem" align="initial">
        {intro.map(text => (
          <Text key={text}>{text}</Text>
        ))}
      </VStack>
    </VStack>
  );
};

export default Introduction;
