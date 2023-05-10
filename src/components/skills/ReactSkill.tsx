import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import ReactSVG from './svg/react.svg';

const ReactSkill: FC = () => {
  return <SkillTemplate name="React.js" svg={<ReactSVG />} />;
};

export default ReactSkill;
