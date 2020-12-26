import { SimpleGrid, VStack } from '@chakra-ui/react';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Work, { TWork } from './work';

const workQuery = graphql`
      query {
        dataJson {
          works {
            title
            summary
            story
            skillsUsed
            link {
              code
              live
            }
            imgUrl
          }
        }
      }
    `

function Works(): JSX.Element {
  const data = useStaticQuery(workQuery).dataJson.works as TWork[];

  return (
    <VStack as="section" w="full" spacing={4} align="initial">
      <h2>Works</h2>
      <SimpleGrid w="full" gap={6} columns={1} >
        {data.map(work => (
          <Work {...work} key={work.title} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default Works;
