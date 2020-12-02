import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as TypeScriptSVG } from './svg/typescript.svg';

function TypeScriptSkill(): JSX.Element {
  return (
    <SkillTemplate name="TypeScript" svg={<TypeScriptSVG />} />
  );
}

export default TypeScriptSkill;