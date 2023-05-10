import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import MongoDBSVG from './svg/mongodb.svg';

const MongoDBSkill: FC = () => {
  return <SkillTemplate name="MongoDB" svg={<MongoDBSVG />} />;
};

export default MongoDBSkill;
