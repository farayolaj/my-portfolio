import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import CSSSVG from './svg/spring.svg';

const CSSSkill: FC = () => {
  return <SkillTemplate name="Spring" svg={<CSSSVG />} />;
};

export default CSSSkill;
