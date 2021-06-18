import React, { useRef, useEffect } from 'react';
import { Block } from 'baseui/block';
import { Tag } from 'baseui/tag';
import { Card, StyledBody, StyledTitle } from 'baseui/card';
import { Button } from 'baseui/button';
import { withStyle } from 'baseui';
import { Heading, HeadingLevel } from 'baseui/heading';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import Image from 'next/image';

import ContentWrapper from '../components/wrappers/ContentWrapper';
import Layout from '../layouts/Default';
import Header from '../components/shared/Header';
import mockServices from '../utils/mocks/mockServices';

const MinHeightBody = withStyle(StyledBody, {
  minHeight: '150px',
});
const cardOverrides = {
  Root: {
    style: ({ $theme }) => ({
      marginLeft: $theme.sizing.scale600,
      marginTop: $theme.sizing.scale500,
    }),
  },
};

const mainCardOverrides = {
  Root: {
    style: ({ $theme }) => ({
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      outline: `none`,
    }),
  },
};

const blockProps = {
  color: 'contentPrimary',
  backgroundColor: 'backgroundPrimary',
};

const Home: React.FC = function () {

  return (
    <>
      <Layout hasHeader={true}>
        <Header />
        <HeadingLevel>
          <FlexGrid
            flexGridColumnCount={[1]}
            backgroundColor="backgroundPrimary"
            color="contentPrimary"
            marginTop="scale300"
            paddingLeft={'10vw'}
            paddingRight={'10vw'}
            justifyContent="center"
            alignContent={'center'}
            alignItems={'center'}
            {...blockProps}
          >
            <FlexGridItem
              display={'flex'}
              justifyContent="center"
              alignContent={'center'}
              alignItems={'center'}
            >
              <Heading>What do we do?</Heading>
            </FlexGridItem>
            <FlexGridItem
              display={'flex'}
              justifyContent="center"
              alignContent={'center'}
              alignItems={'center'}
            >
              <FlexGrid flexGridColumnCount={[1, 2]}>
                {mockServices.length > 0 &&
                  mockServices.map((service) => {
                    return (
                      <FlexGridItem
                        key={service.id}
                      >
                        <Block>
                          <Card overrides={mainCardOverrides}>
                            <StyledTitle>
                              <FlexGrid>
                                <FlexGridItem
                                  display={'flex'}
                                  alignItems={'center'}
                                  className={'card_heading'}
                                >
                                  <Image
                                    src={'https://res.cloudinary.com/dogfasxu0/Blog/BaseWebGoldMine/binary-thinking.svg'}
                                    layout={'fixed'}
                                    width={60}
                                    height={50}
                                    unoptimized={true}
                                  />
                                  <Heading>{service.title}</Heading>
                                </FlexGridItem>
                              </FlexGrid>
                            </StyledTitle>
                            <StyledBody className={'card_body'}>{service.description}</StyledBody>
                            <a href="/getting-started/setup">Learn More</a>
                          </Card>
                        </Block>
                      </FlexGridItem>
                    );
                  })}
              </FlexGrid>
            </FlexGridItem>
          </FlexGrid>
          <Block
            backgroundColor="backgroundPrimary"
            color="contentPrimary"
            marginTop="scale300"
            display="flex"
            paddingLeft={'10vw'}
            paddingRight={'10vw'}
            {...blockProps}
          >
          
            <ContentWrapper>
              <FlexGrid
                flexGridColumnCount={[1, 1]}
                justifyContent={'center'}
                overrides={{
                  Block: {
                    style: ({ $theme }) => ({
                      textDecoration: 'none',
                      ':focus': {
                        outline: `3px solid ${$theme.colors.accent}`,
                        outlineOffset: '5px',
                      },
                    }),
                  },
                }}
              >
                <FlexGridItem>
                  <Tag kind="positive" closeable={false}>
                    New
                  </Tag>
                </FlexGridItem>
                <FlexGridItem
                  overrides={{
                    Block: {
                      style: ({ $theme }) => ({
                        flexWrap: 'wrap',
                        [$theme.mediaQuery.small]: {
                          flexWrap: 'nowrap',
                        },
                      }),
                    },
                  }}
                >
                  <FlexGrid display={'flex'} flexGridColumnCount={[1, 2]}>
                    <FlexGridItem>
                      <Card title="Setup Base Web" overrides={cardOverrides}>
                        <MinHeightBody>
                          Base Web is distributed as an npm package. As Base Web
                          is built on top of a CSS-in-JS engine, all you need is
                          the dependencies from npm.
                        </MinHeightBody>
                        <Button
                          $as="a"
                          href="/getting-started/setup"
                          overrides={{
                            BaseButton: {
                              style: () => ({
                                boxSizing: 'border-box',
                                width: '100%',
                              }),
                            },
                          }}
                        >
                          Setup Base Web
                        </Button>
                      </Card>
                    </FlexGridItem>
                    <FlexGridItem>
                      <Card title="Learning Base Web" overrides={cardOverrides}>
                        <MinHeightBody>
                          The best way to learn Base Web is to start building an
                          application using it. Click on the link below to find
                          2 apps built using Base Web (one simple, one more
                          complex).
                        </MinHeightBody>
                        <Button
                          $as="a"
                          href="/getting-started/learn"
                          overrides={{
                            BaseButton: {
                              style: () => ({
                                boxSizing: 'border-box',
                                width: '100%',
                              }),
                            },
                          }}
                        >
                          Learn more
                        </Button>
                      </Card>
                    </FlexGridItem>
                  </FlexGrid>
                </FlexGridItem>
              </FlexGrid>
            </ContentWrapper>
          </Block>
        </HeadingLevel>
      </Layout>
    </>
  );
};

export default Home;
