import { Box, HStack, Icon, Link, VStack } from '@chakra-ui/react';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

const resumeQuery = graphql`
query {
  dataJson {
    resume {
      download
      view
    }
  }
}
`;

type TResume = { view: string, download: string }

function Resume(): JSX.Element {
  const { view, download } = useStaticQuery(resumeQuery).dataJson.resume as TResume;
  return (
    <VStack as="section" w="full" spacing={4} align="initial">
      <h2>Résumé</h2>
      <Box d="flex" flexDirection="column">
        <Link d="inline-block" w="fit-content" href={view} isExternal>
          <HStack align="center">
            <span>View</span>
            <Icon as={FaEye} ml={2} />
          </HStack>
        </Link>
        <Link d="inline-block" w="fit-content" href={download}>
          <HStack align="center">
            <span>Download</span>
            <Icon as={FaDownload} ml={2} />
          </HStack>
        </Link>
      </Box>
    </VStack>
  );
}

export default Resume;
