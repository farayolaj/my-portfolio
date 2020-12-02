import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as ReactSVG } from './svg/react.svg';

function ReactSkill(): JSX.Element {
  return (
    <SkillTemplate name="React.js" svg={<ReactSVG />} />
  );
}

export default ReactSkill;