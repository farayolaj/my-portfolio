import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as HTMLSVG } from './svg/html.svg';

function HTMLSkill(): JSX.Element {
  return (
    <SkillTemplate name="HTML" svg={<HTMLSVG />} />
  );
}

export default HTMLSkill;