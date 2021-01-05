import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as TypeScriptSVG } from './svg/typescript.svg';

function MySQLSkill(): JSX.Element {
  return (
    <SkillTemplate name="MySQL" svg={<TypeScriptSVG />} />
  );
}

export default MySQLSkill;