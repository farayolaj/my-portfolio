import { FC } from 'react';
import AnimatedBox from './AnimatedBox';
import AnimatedLink from './AnimatedLink';
// import { Flex, Link } from '@chakra-ui/react';
import { Variants } from 'framer-motion';

const menuVariants: Variants = {
  initial: {
    opacity: 0,
    display: 'none',
  },
  animate: {
    opacity: 1,
    display: 'flex',
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  },
};

const linkVariants: Variants = {
  initial: {
    y: '2rem',
    color: 'rgba(255, 255, 255, 0)',
  },
  animate: {
    y: '0rem',
    color: 'rgba(255, 255, 255, 1)',
  },
  exit: {
    color: 'rgba(255, 255, 255, 0)',
    transitionEnd: {
      y: '2rem',
    },
  },
};

type NavMenuProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

const NavMenu: FC<NavMenuProps> = ({ isMenuOpen, closeMenu }) => {
  const animate = isMenuOpen ? 'animate' : 'exit';

  return (
    <AnimatedBox
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      w={['full', null, '50%']}
      flexDirection={['column', null, 'row']}
      fontSize={[null, null, '1.25rem']}
      display="flex"
      mt={[8, null, 0]}
      mb={[4, null, 0]}
      animate={animate}
      initial="initial"
      variants={menuVariants}
    >
      <AnimatedLink href="#skills" onClick={closeMenu} variants={linkVariants}>
        Skills
      </AnimatedLink>
      <AnimatedLink href="#works" onClick={closeMenu} variants={linkVariants}>
        Works
      </AnimatedLink>
      <AnimatedLink href="#resume" onClick={closeMenu} variants={linkVariants}>
        Resume
      </AnimatedLink>
      <AnimatedLink href="#contact" onClick={closeMenu} variants={linkVariants}>
        Contact
      </AnimatedLink>
    </AnimatedBox>
  );
};

export default NavMenu;
