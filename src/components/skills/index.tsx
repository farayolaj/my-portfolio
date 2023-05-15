import { SimpleGrid, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import CSSSkill from './CSSSkill';
import ExpressSkill from './ExpressSkill';
import FirebaseSkill from './FirebaseSkill';
import GatsbySkill from './GatsbySkill';
import GitSkill from './GitSkill';
import GraphQLSkill from './GraphQLSkill';
import HerokuSkill from './HerokuSkill';
import HTMLSkill from './HTMLSkill';
import MongoDBSkill from './MongoDBSkill';
import MySQLSkill from './MySQLSkill';
import NetlifySkill from './NetlifySkill';
import NextSkill from './NextSkill';
import NodeSkill from './NodeSkill';
import ReactSkill from './ReactSkill';
import ReduxSkill from './ReduxSkill';
import TypeScriptSkill from './TypeScriptSkill';
import JavaSkill from './JavaSkill';
import SpringSkill from './SpringSkill';
import NestSkill from './NestSkill';
import DockerSkill from './DockerSkill';
import KubernetesSkill from './KubernetesSkill';
import CircleCISkill from './CircleCISkill';
import PostgreSQLSkill from './PostgreSQLSkill';

const Skills: FC = () => {
  return (
    <VStack as="section" w="full" spacing={4} align="initial" id="skills">
      <h2>Skills</h2>
      <SimpleGrid columns={[3, null, 4]} rowGap={6}>
        <HTMLSkill />
        <CSSSkill />
        <JavaSkill />
        <SpringSkill />
        <NestSkill />
        <DockerSkill />
        <KubernetesSkill />
        <CircleCISkill />
        <ReactSkill />
        <GatsbySkill />
        <NextSkill />
        <GraphQLSkill />
        <NodeSkill />
        <ExpressSkill />
        <MongoDBSkill />
        <PostgreSQLSkill />
        <MySQLSkill />
        <TypeScriptSkill />
        <FirebaseSkill />
        <HerokuSkill />
        <NetlifySkill />
        <ReduxSkill />
        <GitSkill />
      </SimpleGrid>
    </VStack>
  );
};

export default Skills;
