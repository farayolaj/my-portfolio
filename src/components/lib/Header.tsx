import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link, Text, useBreakpointValue } from '@chakra-ui/react';

import MenuButton from './MenuButton';
import NavMenu from './NavMenu';
import AnimatedBox from './AnimatedBox';
import { AnimatePresence, Variants } from 'framer-motion';

const query = graphql`
query {
  dataJson {
    name
  }
}
`;

const variants: Variants = {
  show: {
    top: 0
  },
  hide: {
    top: '-4rem',
  }
}

function Header({ show }: { show: boolean }): JSX.Element {
  const name = useStaticQuery(query).dataJson.name as string;
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <AnimatePresence initial={false}>
      {show && <AnimatedBox w="full" bgColor="lightblack" pos="fixed" py={4} zIndex={1} flexWrap="wrap"
        top={0} px={[8, null, 32]} justifyContent="space-between" fontSize="1.65rem" d="flex"
        animate="show" variants={variants} initial="hide" exit="hide" key="header">
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
      </AnimatedBox>}
    </AnimatePresence>
  );
}

export default Header;