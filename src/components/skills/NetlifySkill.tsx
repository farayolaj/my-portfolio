import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import NetlifySVG from './svg/netlify.svg';

const NetlifySkill: FC = () => {
  return <SkillTemplate name="Netlify" svg={<NetlifySVG />} />;
};

export default NetlifySkill;
