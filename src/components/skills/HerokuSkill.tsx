import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as HerokuSVG } from './svg/heroku.svg';

function HerokuSkill(): JSX.Element {
  return (
    <SkillTemplate name="Heroku" svg={<HerokuSVG />} />
  );
}

export default HerokuSkill;