import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as ExpressSVG } from './svg/express.svg';

function ExpressSkill(): JSX.Element {
  return (
    <SkillTemplate name="Express" svg={<ExpressSVG />} />
  );
}

export default ExpressSkill;