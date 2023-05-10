import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import GitSVG from './svg/git.svg';

const GitSkill: FC = () => {
  return <SkillTemplate name="Git" svg={<GitSVG />} />;
};

export default GitSkill;
