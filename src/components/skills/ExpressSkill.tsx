import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as TypeScriptSVG } from './svg/typescript.svg';

function ExpressSkill(): JSX.Element {
  return (
    <SkillTemplate name="Express" svg={<TypeScriptSVG />} />
  );
}

export default ExpressSkill;