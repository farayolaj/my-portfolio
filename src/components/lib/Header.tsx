import React from 'react';
import { FaHamburger } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';
import { HStack, IconButton, Link, Text, useBreakpointValue } from '@chakra-ui/react';

const query = graphql`
query {
  dataJson {
    name
  }
}
`;

function Header(): JSX.Element {
  const name = useStaticQuery(query).dataJson.name as string;
  const showSideBar = useBreakpointValue({
    base: true,
    md: false
  });

  return (
    <HStack w="full" bgColor="lightblack" pos="fixed"
      top={0} px={[8, 32]} justify="space-between" fontSize="1.65rem">
      <Link opacity={1}>
        <Text
          lineHeight="1.2"
          textAlign="center"
          fontWeight="bold">
          {name}
        </Text>
      </Link>
      <IconButton icon={<FaHamburger />} variant="unstyled" aria-label="Open navigation bar" />
    </HStack>
  );
}

export default Header;