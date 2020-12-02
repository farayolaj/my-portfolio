import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as NodeSVG } from './svg/node.svg';

function NodeSkill(): JSX.Element {
  return (
    <SkillTemplate name="Node.js" svg={<NodeSVG />} />
  );
}

export default NodeSkill;