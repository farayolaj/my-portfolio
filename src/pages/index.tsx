import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Introduction from '../components/introduction';
import LandingPage from '../components/landing';
import Resume from '../components/resume';
import Skills from "../components/skills";
import Works from "../components/works";

export default function Home(): JSX.Element {
  return (
    <Box pb={8}>
      <LandingPage />
      <VStack spacing={10} mt={10} px={[8, 32]}>
        <Introduction />
        <Skills />
        <Works />
        <Resume />
      </VStack>
    </Box>
  );
}
