import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import CSSSVG from './svg/docker.svg';

const CSSSkill: FC = () => {
  return <SkillTemplate name="Docker" svg={<CSSSVG />} />;
};

export default CSSSkill;
