import { VStack } from "@chakra-ui/react";
import React from "react";
import Introduction from '../components/introduction';
import LandingPage from '../components/landing';
import Skills from "../components/skills";

export default function Home(): JSX.Element {
  return (
    <div>
      <LandingPage />
      <VStack spacing={10} mt={10} px={[8, 32]}>
        <Introduction />
        <Skills />
      </VStack>
    </div>
  );
}
