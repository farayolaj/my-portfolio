import { Box, VStack } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Contact from '../components/contact';
import Introduction from '../components/introduction';
import LandingPage from '../components/landing';
import React, { FC } from 'react';
import Resume from '../components/resume';
import Skills from '../components/skills';
import Works from '../components/works';

const Home: FC = () => {
  return (
    <>
      <Helmet title="Farayola Joshua - A Fullstack Web Developer" defer={false}>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Farayola Joshua - A Fullstack Web Developer</title>
        <meta
          name="description"
          content="Fullstack web developer skilled with JavaScript, React, Node, Express"
        />
        <meta
          name="keyword"
          content="portfolio, javascript, developer, fullstack, react, node, express"
        />
        <meta
          property="og:title"
          content="Farayola Joshua - A Fullstack Web Developer"
        />
        <meta
          property="og:description"
          content="Fullstack web developer skilled with JavaScript, React, Node, Express"
        />
        <meta
          property="og:image"
          content="https://farayolaj.tech/images/logo.png"
        />
        <meta property="og:url" content="https://farayolaj.tech" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Farayola Joshua - A Fullstack Web Developer"
        />
        <meta
          name="twitter:description"
          content="Fullstack web developer skilled with JavaScript, React, Node, Express"
        />
        <meta
          name="twitter:image"
          content="https://farayolaj.tech/images/logo.png"
        />
        <link
          rel="preload"
          href="/fonts/FuturaPTLight.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/FuturaPTMedium.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Box pb={8}>
        <LandingPage />
        <VStack px={[8, null, 32]} mt="4.5rem" spacing={10}>
          <Introduction />
          <Skills />
          <Works />
          <Resume />
          <Contact />
        </VStack>
      </Box>
    </>
  );
};

export default Home;
