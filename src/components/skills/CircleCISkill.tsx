import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import CSSSVG from './svg/circleci.svg';

const CSSSkill: FC = () => {
  return <SkillTemplate name="CircleCI" svg={<CSSSVG />} />;
};

export default CSSSkill;
