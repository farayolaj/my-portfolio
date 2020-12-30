import React, { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@chakra-ui/react';

const line1Variant = {
  close: {
    y1: 3.85093,
    y2: 11.243,
    x1: 2.96418,
    x2: 11.7737
  },
  open: {
    y1: 3.5,
    y2: 3.5,
    x1: 0,
    x2: 12
  }
};

const line2Variant = {
  close: {
    y1: 18.6351,
    y2: 3.85094,
    x1: 3.03582,
    x2: 20.6548
  },
  open: {
    y1: 11.5,
    y2: 11.5,
    x1: 0,
    x2: 23
  }
};

const line3Variant = {
  close: {
    y1: 11.2509,
    y2: 18.643,
    x1: 11.7642,
    x2: 20.5737
  },
  open: {
    y1: 19.5,
    y2: 19.5,
    x1: 12,
    x2: 23
  }
};

type MenuButtonProps = {
  isMenuOpen: boolean,
  color?: string,
  size?: number | string,
  ariaLabel: string,
  onClick: MouseEventHandler<HTMLButtonElement>
}

function MenuButton({
  isMenuOpen,
  color = 'currentColor',
  size = '1em',
  ariaLabel,
  onClick
}: MenuButtonProps): JSX.Element {
  const animate = isMenuOpen ? 'close' : 'open';
  const style = {
    color,
    strokeWidth: 3
  };

  
  return (
    <Button onClick={onClick} variant="unstyled" fontSize={size} d="inline-flex">
      <motion.svg width={size} height={size} viewBox="0 0 23 23"
        fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
        animate={animate} style={style} aria-label={ariaLabel}>
        <motion.line {...line1Variant.open} variants={line1Variant} />
        <motion.line {...line2Variant.open} variants={line2Variant} />
        <motion.line {...line3Variant.open} variants={line3Variant} />
      </motion.svg>
    </Button>
  );
}

export default MenuButton;