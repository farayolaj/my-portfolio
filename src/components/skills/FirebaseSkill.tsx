import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as FirebaseSVG } from './svg/firebase.svg';

const FirebaseSkill: FC = () => {
  return <SkillTemplate name="Firebase" svg={<FirebaseSVG />} />;
};

export default FirebaseSkill;
