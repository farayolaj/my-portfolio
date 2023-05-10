import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import GatsbySVG from './svg/gatsby.svg';

const GatsbySkill: FC = () => {
  return <SkillTemplate name="Gatsby.js" svg={<GatsbySVG />} />;
};

export default GatsbySkill;
