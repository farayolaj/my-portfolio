import { Box, HStack, Icon, Link, VStack } from '@chakra-ui/react';
import profile from '@data/profile';
import { FC } from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

const Resume: FC = () => {
  const { view, download } = profile.resume;
  return (
    <VStack as="section" w="full" spacing={4} align="initial" id="resume">
      <h2>Résumé</h2>
      <Box display="flex" flexDirection="column">
        <Link
          display="inline-block"
          w="fit-content"
          style={{ width: '-moz-fit-content' }}
          href={view}
          isExternal
        >
          <HStack align="center">
            <span>View</span>
            <Icon as={FaEye} ml={2} />
          </HStack>
        </Link>
        <Link
          display="inline-block"
          w="fit-content"
          style={{ width: '-moz-fit-content' }}
          href={download}
          download
        >
          <HStack align="center">
            <span>Download</span>
            <Icon as={FaDownload} ml={2} />
          </HStack>
        </Link>
      </Box>
    </VStack>
  );
};

export default Resume;
