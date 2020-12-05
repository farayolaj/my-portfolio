import { HStack, Tag, TagLabel, TagRightIcon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

type WorkProps = {
  title: string,
  summary: string,
  skillsUsed: string[]
}

function Work(): JSX.Element {
  return (
    <VStack rounded={1} bgColor="lightblack" p={3}
      spacing="0.375rem" align="initial" w={['initial', null, '50vw', 'initial']}>
      <Text as="span" fontSize="1.125rem">Just Another Project</Text>
      <Text>This is just another project</Text>
      <HStack>
        <Tag color="white" bgColor="react" minH={0} borderRadius="full" pb="0.15rem">React</Tag>
        <Tag color="white" bgColor="typescript" minH={0} borderRadius="full" pb="0.15rem">Typescript</Tag>
        <Tag color="white" bgColor="mongodb" minH={0} borderRadius="full" pb="0.15rem">MongoDB</Tag>
      </HStack>
      <WorkLinks codeUrl="#" />
    </VStack>
  );
}

function WorkLinks({ liveUrl, codeUrl }: { liveUrl?: string, codeUrl?: string }): JSX.Element {
  if (!liveUrl && !codeUrl) return null;
  return (
    <HStack justify={liveUrl ? 'space-between' : 'initial'}>
      <Tag as="a" href={codeUrl} variant="unstyled" color="white"
        px={0} minH="initial" minW="initial">
        <TagLabel fontSize="inherit">Code</TagLabel>
        <TagRightIcon as={FaCode} fontSize="inherit" />
      </Tag>
      {liveUrl && <Tag as="a" href={liveUrl} variant="unstyled" color="white"
        px={0} minH="initial" minW="initial">
        <TagLabel fontSize="inherit">Live</TagLabel>
        <TagRightIcon as={FaExternalLinkAlt} fontSize="inherit" />
      </Tag>}
    </HStack>
  );
}

export default Work;