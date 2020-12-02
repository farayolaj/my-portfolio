import React from 'react';
import SkillTemplate from './SkillTemplate';
import { ReactComponent as GraphQLSVG } from './svg/graphql.svg';

function GraphQLSkill(): JSX.Element {
  return (
    <SkillTemplate name="GraphQL" svg={<GraphQLSVG />} />
  );
}

export default GraphQLSkill;