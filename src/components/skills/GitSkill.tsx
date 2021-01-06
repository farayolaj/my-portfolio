import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as GitSVG } from './svg/git.svg';

function GitSkill(): JSX.Element {
  return (
    <SkillTemplate name="Git" svg={<GitSVG />} />
  );
}

export default GitSkill;