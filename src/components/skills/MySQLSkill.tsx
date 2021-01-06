import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as MySQLSVG } from './svg/mysql.svg';

function MySQLSkill(): JSX.Element {
  return (
    <SkillTemplate name="MySQL" svg={<MySQLSVG />} />
  );
}

export default MySQLSkill;