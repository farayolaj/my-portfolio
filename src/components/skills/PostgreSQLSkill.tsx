import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import CSSSVG from './svg/postgresql.svg';

const CSSSkill: FC = () => {
  return <SkillTemplate name="PostgreSQL" svg={<CSSSVG />} />;
};

export default CSSSkill;
