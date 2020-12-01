import { VStack } from "@chakra-ui/react";
import React from "react";
import Introduction from '../components/introduction';
import LandingPage from '../components/landing';

export default function Home() {
  return (
    <div>
      <LandingPage />
      <VStack wrap="nowrap" spacing={10} mt={10}>
        <Introduction />
      </VStack>
    </div>
  );
}
