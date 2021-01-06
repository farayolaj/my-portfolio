import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as CSSSVG } from './svg/css.svg';

function CSSSkill(): JSX.Element {
  return (
    <SkillTemplate name="CSS" svg={<CSSSVG />} />
  );
}

export default CSSSkill;