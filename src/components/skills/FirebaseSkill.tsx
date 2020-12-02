import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as FirebaseSVG } from './svg/firebase.svg';

function FirebaseSkill(): JSX.Element {
  return (
    <SkillTemplate name="Firebase" svg={<FirebaseSVG />} />
  );
}

export default FirebaseSkill;