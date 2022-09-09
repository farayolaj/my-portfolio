import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as GatsbySVG } from './svg/gatsby.svg';

const GatsbySkill: FC = () => {
  return <SkillTemplate name="Gatsby.js" svg={<GatsbySVG />} />;
};

export default GatsbySkill;
