import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as MongoDBSVG } from './svg/mongodb.svg';

const MongoDBSkill: FC = () => {
  return <SkillTemplate name="MongoDB" svg={<MongoDBSVG />} />;
};

export default MongoDBSkill;
