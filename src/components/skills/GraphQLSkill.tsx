import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import GraphQLSVG from './svg/graphql.svg';

const GraphQLSkill: FC = () => {
  return <SkillTemplate name="GraphQL" svg={<GraphQLSVG />} />;
};

export default GraphQLSkill;
