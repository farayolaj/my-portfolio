import profile from '@data/profile';
import { Box, HStack, Icon, Link, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact: FC = () => {
  const { email, github, linkedin, twitter } = profile.contact;
  return (
    <VStack
      as="section"
      w="full"
      position="relative"
      spacing={4}
      align="initial"
      id="contact"
    >
      <h2>Contact</h2>
      <Box display="flex" flexDirection="column">
        <Link display="inline-block" w="fit-content" href={github} isExternal>
          <HStack align="center">
            <span>Github</span>
            <Icon as={FaGithub} ml={2} />
          </HStack>
        </Link>
        <Link display="inline-block" w="fit-content" href={linkedin} isExternal>
          <HStack align="center">
            <span>LinkedIn</span>
            <Icon as={FaLinkedin} ml={2} />
          </HStack>
        </Link>
        <Link display="inline-block" w="fit-content" href={twitter} isExternal>
          <HStack align="center">
            <span>Twitter</span>
            <Icon as={FaTwitter} ml={2} />
          </HStack>
        </Link>
        <Link href={`mailto:${email}`} w="fit-content">
          <HStack align="center">
            <span>{email}</span>
            <Icon as={FaEnvelope} ml={2} />
          </HStack>
        </Link>
      </Box>
    </VStack>
  );
};

export default Contact;
