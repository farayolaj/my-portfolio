import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as GatsbySVG } from './svg/gatsby.svg';

function GatsbySkill(): JSX.Element {
  return (
    <SkillTemplate name="Gatsby.js" svg={<GatsbySVG />} />
  );
}

export default GatsbySkill;