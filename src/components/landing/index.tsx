import {
  Box,
  Flex,
  Icon,
  keyframes,
  Link,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FC, useEffect, useRef } from 'react';
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Header from '../lib/Header';
import { useIntersect } from '../../hooks';
import profile from '@data/profile';

import GraphQLSvg from './icons/graphql.svg';
import NodeSvg from './icons/node.svg';
import ReactSvg from './icons/react.svg';

const LandingPage: FC = () => {
  const {
    name,
    tagLine,
    contact: { github, linkedin, twitter },
  } = profile;

  const landingRef = useRef<HTMLDivElement>(null);
  const [entry, setNode] = useIntersect({ threshold: 0.1 });

  useEffect(() => {
    setNode(landingRef.current);
  }, [setNode]);

  const shouldShowHeader = !!entry && !entry.isIntersecting;
  const nodeAnim = keyframes`
    from { transform: scale(1);  }
    to { transform: scale(1.2); }
  `;
  const reactAnim = keyframes`
    from { transform: scale(1);  }
    to { transform: scale(1.25); }
  `;
  const graphqlAnim = keyframes`
    from { transform: scale(1);  }
    to { transform: scale(1.2); }
  `;

  return (
    <>
      <Flex
        bgColor="lightblack"
        direction="column"
        align="center"
        ref={landingRef}
        justify="space-around"
        px={8}
        py={4}
        w="full"
        h="100vh"
      >
        <Text fontSize="24px">Hello, nice to have you here...</Text>
        <Box pos="relative">
          <Box pos="absolute" w="full" h={24}>
            <Box
              pos="relative"
              left="50%"
              w="fit-content"
              style={{ width: '-moz-fit-content' }}
              animation={`${nodeAnim} 5s linear infinite alternate`}
            >
              <NodeSvg />
            </Box>
            <Box
              pos="relative"
              left="10%"
              top="30%"
              w="fit-content"
              style={{ width: '-moz-fit-content' }}
              animation={`${reactAnim} 10s linear 1.5s infinite alternate`}
            >
              <GraphQLSvg />
            </Box>
            <Box
              pos="relative"
              left="72%"
              top={{
                base: '50%',
                md: '15%',
              }}
              w="fit-content"
              style={{ width: '-moz-fit-content' }}
              animation={`${graphqlAnim} 10s linear 3s infinite alternate`}
            >
              <ReactSvg />
            </Box>
          </Box>
          <VStack pos="relative">
            <Text fontSize="20px" alignSelf="flex-start">
              I am
            </Text>
            <Text
              fontSize="72px"
              lineHeight="1.2"
              textAlign="center"
              fontWeight="bold"
            >
              {name}
            </Text>
            <Tag fontSize="16px" bgColor="darkblack" color="white">
              {tagLine}
            </Tag>
          </VStack>
        </Box>
        <VStack w="full" spacing={10}>
          <Flex
            justify="space-between"
            w={{
              base: 'full',
              md: '50%',
            }}
          >
            <Link
              href={github}
              h="fit-content"
              display="inline-flex"
              fontSize="2rem"
              aria-label="github profile"
              isExternal
            >
              <Icon as={FaGithub} />
            </Link>
            <Link
              href={linkedin}
              h="fit-content"
              display="inline-flex"
              fontSize="2rem"
              aria-label="linkedin profile"
              isExternal
            >
              <Icon as={FaLinkedin} />
            </Link>
            <Link
              href={twitter}
              h="fit-content"
              display="inline-flex"
              fontSize="2rem"
              aria-label="twitter profile"
              isExternal
            >
              <Icon as={FaTwitter} />
            </Link>
          </Flex>
          <Link
            href="#introduction"
            h="fit-content"
            display="inline-flex"
            fontSize="2rem"
            aria-label="next section"
          >
            <Icon as={FaArrowDown} />
          </Link>
        </VStack>
      </Flex>
      <Header show={shouldShowHeader} />
    </>
  );
};

export default LandingPage;
