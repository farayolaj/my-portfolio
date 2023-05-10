import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import CSSSVG from './svg/css.svg';

const CSSSkill: FC = () => {
  return <SkillTemplate name="CSS" svg={<CSSSVG />} />;
};

export default CSSSkill;
