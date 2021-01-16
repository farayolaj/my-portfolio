import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as NextSVG } from './svg/next.svg';

function NextSkill(): JSX.Element {
  return (
    <SkillTemplate name="Next.js" svg={<NextSVG />} />
  );
}

export default NextSkill;