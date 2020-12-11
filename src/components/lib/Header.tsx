import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Link, Text, useBreakpointValue } from '@chakra-ui/react';

import MenuButton from './MenuButton';
import NavMenu from './NavMenu';

const query = graphql`
query {
  dataJson {
    name
  }
}
`;

function Header(): JSX.Element {
  const name = useStaticQuery(query).dataJson.name as string;
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <Flex w="full" bgColor="lightblack" pos="fixed" py={4} zIndex={1} flexWrap="wrap"
      top={0} px={[8, null, 32]} justify="space-between" fontSize="1.65rem">
      <Link opacity={1}>
        <Text
          fontSize="1em"
          lineHeight="1.2"
          textAlign="center"
          fontWeight="bold">
          {name}
        </Text>
      </Link>
      {isMobile && 
        <MenuButton onClick={toggleMenu} ariaLabel="Open and close menu" isMenuOpen={isMenuOpen} />}
      {isMobile ? (isMenuOpen ? <NavMenu /> : null) : <NavMenu />}
    </Flex>
  );
}

export default Header;