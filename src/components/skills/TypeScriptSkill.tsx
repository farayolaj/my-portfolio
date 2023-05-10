import { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import TypeScriptSVG from './svg/typescript.svg';

const TypeScriptSkill: FC = () => {
  return <SkillTemplate name="TypeScript" svg={<TypeScriptSVG />} />;
};

export default TypeScriptSkill;
