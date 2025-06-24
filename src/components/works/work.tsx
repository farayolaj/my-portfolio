import {
  Flex,
  HStack,
  Link,
  Spacer,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  VStack,
} from '@chakra-ui/react';
import type profile from '@data/profile';
import { FC } from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const Work: FC<(typeof profile)['works'][0]> = props => {
  const { title, summary, story, skillsUsed, link, imgUrl } = props;

  return (
    <VStack
      p={3}
      spacing="0.375rem"
      align="initial"
      rounded={1}
      bgColor="lightblack"
    >
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
      <Spacer />
      <WorkLinks codeUrl={link.code} liveUrl={link.live} />
    </VStack>
  );
};

const WorkLinks: FC<{
  liveUrl?: string;
  codeUrl?: string;
}> = ({ liveUrl, codeUrl }) => {
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
};

export default Work;
