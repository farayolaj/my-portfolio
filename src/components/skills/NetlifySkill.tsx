import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as NetlifySVG } from './svg/netlify.svg';

function NetlifySkill(): JSX.Element {
  return (
    <SkillTemplate name="Netlify" svg={<NetlifySVG />} />
  );
}

export default NetlifySkill;