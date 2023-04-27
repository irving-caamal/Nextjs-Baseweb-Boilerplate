import * as React from 'react';
import { Block, BlockProps } from 'baseui/block';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Heading } from 'baseui/heading';
import { ParagraphMedium } from 'baseui/typography';
import Image from 'next/image';

const itemProps: BlockProps = {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
};
const Header: React.FC = () => {
  return (
    <Block
      display={'flex'}
      flexWrap
      width={'100%'}
      overflow={'hidden'}
      overrides={{
        Block: {
          style: () => ({
            height: '100vh',
          }),
        },
      }}
    >
      <FlexGrid
        flexGridColumnCount={[1, 1, 1]}
        flexGridColumnGap="scale200"
        flexGridRowGap="scale800"
        flexWrap
        color="white"
        backgroundColor={'primary'}
        justifyContent={'center'}
        alignItems={'start'}
        maxWidth={'100%'}
        overrides={{
          Block: {
            style: ({ $theme }) => ({
              height: '100vh',
              [$theme.mediaQuery.medium]: {
                alignItems: 'center',
              },
            }),
          },
        }}
      >
        <FlexGridItem {...itemProps} flexWrap maxWidth={'100%'}>
          <FlexGrid
            flexWrap
            maxWidth={'100%'}
            flexGridColumnCount={[1, 1, 3]}
            flexGridColumnGap="scale100"
            flexGridRowGap="scale100"
            marginLeft={'30px'}
            color="white"
            alignItems={'start'}
            overrides={{
              Block: {
                style: ({ $theme }) => ({
                  [$theme.mediaQuery.medium]: {
                    alignItems: 'center',
                  },
                }),
              },
            }}
          >
            <FlexGridItem flexWrap maxWidth={'100%'} textOverflow={'hidden'}>
              <Heading color={'white'}>
                <strong>Software is still eating the world.</strong>
              </Heading>
              <ParagraphMedium color={'white'}>
                Vivamus vehicula justo suscipit, vestibulum nibh eu, faucibus
                faucibus nisi. Aenean molestie sapien nibh, sed sagittis turpis
                turpis turpis iaculis id. Nam mollis pulvinar ex eget gravida.
                Pellentesque fringilla odio a consequat condimentum. Curabitur
                Curabitur ut auctor mi. Nunc blandit, tellus quis fringilla
                sollicitudin, risus libero scelerisque lorem, ut sagittis risus
                ipsum in nisl.
              </ParagraphMedium>
            </FlexGridItem>
            <FlexGridItem display="none"></FlexGridItem>
            <FlexGridItem {...itemProps}>
              <Image
                src={
                  'https://res.cloudinary.com/dogfasxu0/Blog/BaseWebGoldMine/binary-thinking.svg'
                }
                alt="Binary Thinking"
                width={600}
                height={400}
                unoptimized={true}
              />
            </FlexGridItem>
          </FlexGrid>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
          <p>
            {'\u{2B50}'}
            You can override almost everything of each component
          </p>
        </FlexGridItem>
      </FlexGrid>
    </Block>
  );
};

export default Header;
