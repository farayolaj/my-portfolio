import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as HTMLSVG } from './svg/html.svg';

const HTMLSkill: FC = () => {
  return <SkillTemplate name="HTML" svg={<HTMLSVG />} />;
};

export default HTMLSkill;
