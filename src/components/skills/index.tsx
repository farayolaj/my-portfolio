import { SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import FirebaseSkill from './FirebaseSkill';
import GraphQLSkill from './GraphQLSkill';
import MongoDBSkill from './MongoDBSkill';
import NodeSkill from './NodeSkill';
import ReactSkill from './ReactSkill';
import TypeScriptSkill from './TypeScriptSkill';

function Skills(): JSX.Element {
  return (
    <VStack as="section" w="full" spacing={4} align="initial">
      <h2>Skills</h2>
      <SimpleGrid templateColumns="1fr 1fr 1fr 1fr" rowGap={6}>
        <ReactSkill />
        <GraphQLSkill />
        <NodeSkill />
        <MongoDBSkill />
        <TypeScriptSkill />
        <FirebaseSkill />
      </SimpleGrid>
    </VStack>
  );
}

export default Skills;