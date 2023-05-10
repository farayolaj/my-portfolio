import { VStack, useBreakpointValue } from '@chakra-ui/react';
import { FC, cloneElement } from 'react';

type SkillTemplateProp = {
  name: string;
  svg: JSX.Element;
};

const SkillTemplate: FC<SkillTemplateProp> = ({ name, svg }) => {
  const size = useBreakpointValue({
    base: 40,
    md: 80,
  });

  return (
    <VStack>
      {cloneElement(svg, {
        height: size,
        width: size,
        viewBox: '0 0 40 40',
      })}
      <span>{name}</span>
    </VStack>
  );
};

export default SkillTemplate;
