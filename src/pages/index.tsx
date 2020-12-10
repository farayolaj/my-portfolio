import { Box, VStack } from "@chakra-ui/react";
import Contact from '../components/contact';
import Introduction from '../components/introduction';
import Header from '../components/lib/Header';
import LandingPage from '../components/landing';
import React from "react";
import Resume from '../components/resume';
import Skills from "../components/skills";
import Works from "../components/works";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Box pb={8} >
        <LandingPage />
        <VStack spacing={10} mt={10} px={[8, 32]}>
          <Introduction />
          <Skills />
          <Works />
          <Resume />
          <Contact />
        </VStack>
      </Box>
    </>
  );
}
