import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as ReduxSVG } from './svg/redux.svg';

const ReduxSkill: FC = () => {
  return <SkillTemplate name="Redux" svg={<ReduxSVG />} />;
};

export default ReduxSkill;
