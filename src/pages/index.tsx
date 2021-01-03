import { Box, VStack } from "@chakra-ui/react";
import Contact from '../components/contact';
import Introduction from '../components/introduction';
import LandingPage from '../components/landing';
import React from "react";
import Resume from '../components/resume';
import Skills from "../components/skills";
import Works from "../components/works";

export default function Home(): JSX.Element {
  return (
    <Box pb={8} >
      <LandingPage />
      <VStack px={[8, null, 32]} mt="4.5rem" spacing={10}>
        <Introduction />
        <Skills />
        <Works />
        <Resume />
        <Contact />
      </VStack>
    </Box>
  );
}
