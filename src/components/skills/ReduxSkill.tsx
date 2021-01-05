import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as TypeScriptSVG } from './svg/typescript.svg';

function ReduxSkill(): JSX.Element {
  return (
    <SkillTemplate name="Redux" svg={<TypeScriptSVG />} />
  );
}

export default ReduxSkill;