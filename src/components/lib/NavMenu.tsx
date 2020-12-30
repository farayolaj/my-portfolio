import AnimatedBox from './AnimatedBox';
import AnimatedLink from './AnimatedLink';
import React from 'react';
// import { Flex, Link } from '@chakra-ui/react';
import { Variants } from 'framer-motion';

const menuVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const linkVariants: Variants = {
  initial: {
    y: '2rem',
    opacity: 0
  },
  animate: {
    y: '0rem',
    opacity: 0.7
  }
}

type NavMenuProps = {
  closeMenu: () => void
};

function NavMenu({ closeMenu }: NavMenuProps): JSX.Element {
  return (
    <AnimatedBox alignItems="center" justifyContent="space-between" w={['full', null, '50%']}
      flexDirection={['column', null, 'row']} fontSize={[null, null, '1.25rem']} d="flex"
      mt={[8, null, 0]} mb={[4, null, 0]} animate="animate" initial="initial" variants={menuVariants} >
      <AnimatedLink href="#skills" onClick={closeMenu} variants={linkVariants} >Skills</AnimatedLink>
      <AnimatedLink href="#works" onClick={closeMenu} variants={linkVariants} >Works</AnimatedLink>
      <AnimatedLink href="#resume" onClick={closeMenu} variants={linkVariants} >Resume</AnimatedLink>
      <AnimatedLink href="#contact" onClick={closeMenu} variants={linkVariants} >Contact</AnimatedLink>
    </AnimatedBox>
  );
}

export default NavMenu