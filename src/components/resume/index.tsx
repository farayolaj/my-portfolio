import { Box, HStack, Icon, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

function Resume(): JSX.Element {
  return (
    <VStack as="section" w="full" spacing={4} align="initial">
      <h2>Résumé</h2>
      <Box d="flex" flexDirection="column">
        <Link d="inline-block">
          <HStack align="center" w="fit-content">
            <span>View</span>
            <Icon as={FaEye} ml={2} />
          </HStack>
        </Link>
        <Link d="inline-block">
          <HStack align="center" w="fit-content">
            <span>Download</span>
            <Icon as={FaDownload} ml={2} />
          </HStack>
        </Link>
      </Box>
    </VStack>
  );
}

export default Resume;
