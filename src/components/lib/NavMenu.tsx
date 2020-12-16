import React from 'react';
import { Flex, Link } from '@chakra-ui/react';

function NavMenu(): JSX.Element {
  return (
    <Flex align="center" justify="space-between" w={['full', null, '50%']}
      direction={['column', null, 'row']} fontSize={[null, null, '1.25rem']}
      mt={[8, null, 0]} mb={[4, null, 0]}>
      <Link href="#">Skills</Link>
      <Link href="#">Works</Link>
      <Link href="#">Resume</Link>
    </Flex>
  );
}

export default NavMenu