import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import CSSSVG from './svg/java.svg';

const CSSSkill: FC = () => {
  return <SkillTemplate name="Java" svg={<CSSSVG />} />;
};

export default CSSSkill;
