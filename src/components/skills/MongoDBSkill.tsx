import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as MongoDBSVG } from './svg/mongodb.svg';

function MongoDBSkill(): JSX.Element {
  return (
    <SkillTemplate name="MongoDB" svg={<MongoDBSVG />} />
  );
}

export default MongoDBSkill;