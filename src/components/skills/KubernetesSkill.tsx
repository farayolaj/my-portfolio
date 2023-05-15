import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import CSSSVG from './svg/kubernetes.svg';

const CSSSkill: FC = () => {
  return <SkillTemplate name="Kubernetes" svg={<CSSSVG />} />;
};

export default CSSSkill;
