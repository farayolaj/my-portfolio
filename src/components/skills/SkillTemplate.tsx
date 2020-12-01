import { VStack } from '@chakra-ui/react';
import React from 'react';

type SkillTemplateProp = {
  name: string,
  svg: JSX.Element
}
function SkillTemplate({ name, svg }: SkillTemplateProp): JSX.Element {
  return (
    <VStack>
      {svg}
      <span>{name}</span>
    </VStack>
  );
}

export default SkillTemplate;