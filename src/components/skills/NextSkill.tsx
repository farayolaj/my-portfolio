import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as NextSVG } from './svg/next.svg';

const NextSkill: FC = () => {
  return <SkillTemplate name="Next.js" svg={<NextSVG />} />;
};

export default NextSkill;
