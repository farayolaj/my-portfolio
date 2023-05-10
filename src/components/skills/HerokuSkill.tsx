import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import HerokuSVG from './svg/heroku.svg';

const HerokuSkill: FC = () => {
  return <SkillTemplate name="Heroku" svg={<HerokuSVG />} />;
};

export default HerokuSkill;
