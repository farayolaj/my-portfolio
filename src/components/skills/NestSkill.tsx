import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import CSSSVG from './svg/nest.svg';

const CSSSkill: FC = () => {
  return <SkillTemplate name="Nest.js" svg={<CSSSVG />} />;
};

export default CSSSkill;
