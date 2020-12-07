import { HStack, Link, Tag, TagLabel, TagRightIcon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

export type TWork = {
  title: string,
  summary: string,
  skillsUsed: string[],
  link: {
    code: string,
    live: string
  }
}

function Work({ title, summary, skillsUsed, link }: TWork): JSX.Element {
  return (
    <VStack rounded={1} bgColor="lightblack" p={3}
      spacing="0.375rem" align="initial" w={['initial', null, '50vw', 'initial']}>
      <Text as="span" fontSize="1.125rem">{title}</Text>
      <Text>{summary}</Text>
      <HStack>
        {skillsUsed.map(skill => (
          <Tag color="white" bgColor={skill.toLowerCase()} minH={0}
            borderRadius="full" pb="0.15rem" key={skill}>
            {skill}
          </Tag>
        ))}
      </HStack>
      <WorkLinks codeUrl={link.code} liveUrl={link.live} />
    </VStack>
  );
}

function WorkLinks({ liveUrl, codeUrl }: { liveUrl?: string, codeUrl?: string }): JSX.Element {
  if (!liveUrl && !codeUrl) return null;
  return (
    <HStack justify={liveUrl ? 'space-between' : 'initial'} lineHeight="1">
      <Link href={codeUrl}>
        <Tag variant="unstyled" color="white"
          px={0} minH="initial" minW="initial">
          <TagLabel fontSize="inherit">Code</TagLabel>
          <TagRightIcon as={FaCode} fontSize="inherit" />
        </Tag>
      </Link>
      {liveUrl && <Link href={liveUrl}>
        <Tag variant="unstyled" color="white"
          px={0} minH="initial" minW="initial">
          <TagLabel fontSize="inherit">Live</TagLabel>
          <TagRightIcon as={FaExternalLinkAlt} fontSize="inherit" />
        </Tag>
      </Link>}
    </HStack>
  );
}

export default Work;