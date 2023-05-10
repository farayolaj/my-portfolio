import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import MySQLSVG from './svg/mysql.svg';

const MySQLSkill: FC = () => {
  return <SkillTemplate name="MySQL" svg={<MySQLSVG />} />;
};

export default MySQLSkill;
