import { SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import CSSSkill from './CSSSkill';
import ExpressSkill from './ExpressSkill';
import FirebaseSkill from './FirebaseSkill';
import GitSkill from './GitSkill';
import GraphQLSkill from './GraphQLSkill';
import HTMLSkill from './HTMLSkill';
import MongoDBSkill from './MongoDBSkill';
import MySQLSkill from './MySQLSkill';
import NodeSkill from './NodeSkill';
import ReactSkill from './ReactSkill';
import ReduxSkill from './ReduxSkill';
import TypeScriptSkill from './TypeScriptSkill';

function Skills(): JSX.Element {
  return (
    <VStack as="section" w="full" spacing={4} align="initial" id="skills">
      <h2>Skills</h2>
      <SimpleGrid templateColumns="1fr 1fr 1fr 1fr" rowGap={6}>
        <HTMLSkill />
        <CSSSkill />
        <ReactSkill />
        <GraphQLSkill />
        <NodeSkill />
        <ExpressSkill />
        <MongoDBSkill />
        <MySQLSkill />
        <TypeScriptSkill />
        <FirebaseSkill />
        <ReduxSkill />
        <GitSkill />
      </SimpleGrid>
    </VStack>
  );
}

export default Skills;