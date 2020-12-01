import { Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import FirebaseSkill from './FirebaseSkill';
import GraphQLSkill from './GraphQLSkill';
import MongoDBSkill from './MongoDBSkill';
import NodeSkill from './NodeSkill';
import ReactSkill from './ReactSkill';
import TypeScriptSkill from './TypeScriptSkill';

function Skills(): JSX.Element {
  return (
    <VStack as="section" px={8} spacing={4} align="initial">
      <h2>Skills</h2>
      <Flex wrap="wrap" justify="center">
        <ReactSkill />
        <GraphQLSkill />
        <NodeSkill />
        <MongoDBSkill />
        <TypeScriptSkill />
        <FirebaseSkill />
      </Flex>
    </VStack>
  );
}

export default Skills;