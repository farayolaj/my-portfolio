import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as ReduxSVG } from './svg/redux.svg';

function ReduxSkill(): JSX.Element {
  return (
    <SkillTemplate name="Redux" svg={<ReduxSVG />} />
  );
}

export default ReduxSkill;