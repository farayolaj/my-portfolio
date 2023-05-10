import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import ReduxSVG from './svg/redux.svg';

const ReduxSkill: FC = () => {
  return <SkillTemplate name="Redux" svg={<ReduxSVG />} />;
};

export default ReduxSkill;
