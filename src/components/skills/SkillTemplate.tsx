import { VStack, useBreakpointValue } from '@chakra-ui/react';
import React, { FC } from 'react';

type SkillTemplateProp = {
  name: string;
  svg: JSX.Element;
};

const SkillTemplate: FC<SkillTemplateProp> = ({ name, SVG) => {
  const size = useBreakpointValue({
    base: 40,
    md: 80,
  });

  return (
    <VStack>
      {React.cloneElement(svg, {
        height: size,
        width: size,
        viewBox: '0 0 40 40',
      })}
      <span>{name}</span>
    </VStack>
  );
};

export default SkillTemplate;
