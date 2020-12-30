import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link, Text, useBreakpointValue } from '@chakra-ui/react';

import MenuButton from './MenuButton';
import NavMenu from './NavMenu';
import AnimatedBox from './AnimatedBox';
import { Variants } from 'framer-motion';

const query = graphql`
query {
  dataJson {
    name
  }
}
`;

const variants: Variants = {
  initial: {
    top: '-4rem',
    display: 'none'
  },
  show: {
    top: 0,
    display: 'flex',
    transition: {
      when: 'beforeChildren'
    }
  },
  hide: {
    top: '-4rem',
    transition: {
      when: 'afterChildren'
    },
    transitionEnd: {
      display: 'none'
    }
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
  const closeMenu = () => setMenuOpen(false);
  const animate = show ? 'show' : 'hide';

  return (
      <AnimatedBox w="full" bgColor="lightblack" pos="fixed" py={4} zIndex={1} flexWrap="wrap"
        top={0} px={[8, null, 32]} justifyContent="space-between" fontSize="1.65rem" d="flex"
        animate={animate} variants={variants} initial="initial">
        <Link opacity={1} href="#">
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
        {isMobile ? (isMenuOpen ? <NavMenu closeMenu={closeMenu} /> : null) : <NavMenu closeMenu={closeMenu} />}
      </AnimatedBox>
  );
}

export default Header;