import { VStack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

type SkillTemplateProp = {
  name: string,
  svg: JSX.Element
}

function SkillTemplate({ name, svg }: SkillTemplateProp): JSX.Element {
  const size = useBreakpointValue({
    base: 40,
    md: 80
  });

  return (
    <VStack>
      {React.cloneElement(svg, {
        height: size,
        width: size,
        viewBox: '0 0 40 40'
      })}
      <span>{name}</span>
    </VStack>
  );
}

export default SkillTemplate;