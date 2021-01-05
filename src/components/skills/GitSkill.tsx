import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as TypeScriptSVG } from './svg/typescript.svg';

function GitSkill(): JSX.Element {
  return (
    <SkillTemplate name="Git" svg={<TypeScriptSVG />} />
  );
}

export default GitSkill;