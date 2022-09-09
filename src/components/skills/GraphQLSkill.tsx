import React, { FC } from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as GraphQLSVG } from './svg/graphql.svg';

const GraphQLSkill: FC = () => {
  return <SkillTemplate name="GraphQL" svg={<GraphQLSVG />} />;
};

export default GraphQLSkill;
