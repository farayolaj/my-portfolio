import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import ExpressSVG from './svg/express.svg';

const ExpressSkill: FC = () => {
  return <SkillTemplate name="Express" svg={<ExpressSVG />} />;
};

export default ExpressSkill;
