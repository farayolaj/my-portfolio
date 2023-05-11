import { FC, useEffect, useState } from 'react';
import { Link } from '@chakra-ui/next-js';
import { Text, useBreakpointValue } from '@chakra-ui/react';

import MenuButton from './MenuButton';
import NavMenu from './NavMenu';
import AnimatedBox from './AnimatedBox';
import { Variants } from 'framer-motion';
import profile from '@data/profile';

const variants: Variants = {
  initial: {
    top: '-4rem',
    display: 'none',
  },
  show: {
    top: 0,
    display: 'flex',
    transition: {
      when: 'beforeChildren',
    },
  },
  hide: {
    top: '-4rem',
    transition: {
      when: 'afterChildren',
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const Header: FC<{ show: boolean }> = ({ show }) => {
  const name = profile.name;
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });
  const [isMenuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!isMobile) setMenuOpen(true);
    else setMenuOpen(false);
  }, [isMobile]);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);
  const animate = show ? 'show' : 'hide';

  return (
    <AnimatedBox
      as="header"
      w="full"
      bgColor="lightblack"
      pos="fixed"
      py={4}
      zIndex={1}
      flexWrap="wrap"
      top={0}
      px={[8, null, 32]}
      justifyContent="space-between"
      fontSize="1.65rem"
      display="flex"
      animate={animate}
      variants={variants}
      initial="initial"
    >
      <Link opacity={1} href="/">
        <Text
          as="h1"
          fontSize="1em"
          lineHeight="1.2"
          textAlign="center"
          fontWeight="bold"
        >
          {name}
        </Text>
      </Link>
      {isMobile && (
        <MenuButton
          onClick={toggleMenu}
          ariaLabel="Open and close menu"
          isMenuOpen={isMenuOpen}
        />
      )}
      <NavMenu
        isMenuOpen={isMobile ? isMenuOpen : show}
        closeMenu={closeMenu}
      />
    </AnimatedBox>
  );
};

export default Header;
