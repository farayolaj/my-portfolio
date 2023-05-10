import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import FirebaseSVG from './svg/firebase.svg';

const FirebaseSkill: FC = () => {
  return <SkillTemplate name="Firebase" svg={<FirebaseSVG />} />;
};

export default FirebaseSkill;
