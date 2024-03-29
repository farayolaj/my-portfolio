import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import HTMLSVG from './svg/html.svg';

const HTMLSkill: FC = () => {
  return <SkillTemplate name="HTML" svg={<HTMLSVG />} />;
};

export default HTMLSkill;
