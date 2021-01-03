import { Text, VStack } from '@chakra-ui/react';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const introQuery = graphql`
query {
  dataJson {
    introduction
  }
}
`;

function Introduction(): JSX.Element {
  const intro = useStaticQuery(introQuery).dataJson.introduction as string;
  return (
    <VStack as="section" w="full" spacing={4} align="initial" id="introduction">
      <h2>Introduction</h2>
      <Text>
        {intro}
      </Text>
    </VStack>
  );
}

export default Introduction;
