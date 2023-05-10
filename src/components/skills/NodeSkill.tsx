import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import NodeSVG from './svg/node.svg';

const NodeSkill: FC = () => {
  return <SkillTemplate name="Node.js" svg={<NodeSVG />} />;
};

export default NodeSkill;
