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
            skillsUsed
            link {
              code
              live
            }
          }
        }
      }
    `

function Works(): JSX.Element {
  const data = useStaticQuery(workQuery).dataJson.works as TWork[];

  return (
    <VStack as="section" w="full" spacing={4} align="initial">
      <h2>Works</h2>
      <SimpleGrid columns={[1, null, null, 2, 3]}
        justifyItems={['initial', null, 'center', 'initial']} w="full" gap={6}>
        {data.map(work => (
          <Work {...work} key={work.title} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default Works;
