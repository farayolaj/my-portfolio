import {
  Flex,
  HStack,
  Image,
  Link,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

export type TWork = {
  title: string;
  summary: string;
  story: string[];
  skillsUsed: string[];
  link: {
    code: string;
    live: string;
  };
  imgUrl: string;
};

function Work(props: TWork): JSX.Element {
  const { title, summary, story, skillsUsed, link, imgUrl } = props;

  return (
    <Flex
      rounded={1}
      bgColor="lightblack"
      align="center"
      direction="column"
      mt={[null, null, '12vw']}
    >
      <Image
        src={imgUrl}
        alt={title}
        width={['100%', null, '50%']}
        fit="cover"
        mt={[null, null, '-12vw']}
        p={[3, null, 0]}
      />
      <VStack w="full" p={3} spacing="0.375rem" align="initial">
        <Text as="span" fontSize="1.125rem">
          {title}
        </Text>
        <Text fontStyle="italic">{summary}</Text>
        <Flex flexWrap="wrap" style={{ gap: '0.25rem' }}>
          {skillsUsed.map(skill => (
            <Tag
              color="white"
              bgColor={skill.toLowerCase()}
              minH={0}
              borderRadius="full"
              key={skill}
            >
              {skill.toLowerCase()}
            </Tag>
          ))}
        </Flex>
        {story.map(text => (
          <Text key={text}>{text}</Text>
        ))}
        <WorkLinks codeUrl={link.code} liveUrl={link.live} />
      </VStack>
    </Flex>
  );
}

function WorkLinks({
  liveUrl,
  codeUrl,
}: {
  liveUrl?: string;
  codeUrl?: string;
}): JSX.Element {
  if (!liveUrl && !codeUrl) return null;
  return (
    <HStack
      justify={[liveUrl ? 'space-between' : 'initial', null, 'space-around']}
      pt={4}
      lineHeight="1"
    >
      <Link href={codeUrl} isExternal>
        <Tag
          variant="unstyled"
          color="white"
          px={0}
          minH="initial"
          minW="initial"
        >
          <TagLabel fontSize="inherit">Code</TagLabel>
          <TagRightIcon as={FaCode} fontSize="inherit" />
        </Tag>
      </Link>
      {liveUrl && (
        <Link href={liveUrl} isExternal>
          <Tag
            variant="unstyled"
            color="white"
            px={0}
            minH="initial"
            minW="initial"
          >
            <TagLabel fontSize="inherit">Live</TagLabel>
            <TagRightIcon as={FaExternalLinkAlt} fontSize="inherit" />
          </Tag>
        </Link>
      )}
    </HStack>
  );
}

export default Work;
