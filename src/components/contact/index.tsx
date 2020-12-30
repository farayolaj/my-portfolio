import { Box, HStack, Icon, Link, VStack } from '@chakra-ui/react';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const introQuery = graphql`
query {
  dataJson {
    contact {
      email
      github
      linkedin
      twitter
    }
  }
}
`;

type TContact = {
  email: string,
  github: string,
  linkedin: string,
  twitter: string
}

function Contact(): JSX.Element {
  const {
    email,
    github,
    linkedin,
    twitter
  } = useStaticQuery(introQuery).dataJson.contact as TContact;
  return (
    <>
      <span id="contact" style={{ paddingTop: '4.5rem' }}></span>
      <VStack as="section" w="full" spacing={4} align="initial">
        <h2>Contact</h2>
        <Box d="flex" flexDirection="column">
          <Link href={`mailto:${email}`} w="fit-content">{email}</Link>
          <Link d="inline-block" w="fit-content" href={github} isExternal>
            <HStack align="center">
              <span>Github</span>
              <Icon as={FaGithub} ml={2} />
            </HStack>
          </Link>
          <Link d="inline-block" w="fit-content" href={linkedin} isExternal>
            <HStack align="center">
              <span>LinkedIn</span>
              <Icon as={FaLinkedin} ml={2} />
            </HStack>
          </Link>
          <Link d="inline-block" w="fit-content" href={twitter} isExternal>
            <HStack align="center">
              <span>Twitter</span>
              <Icon as={FaTwitter} ml={2} />
            </HStack>
          </Link>
        </Box>
      </VStack>
    </>
  );
}

export default Contact;
