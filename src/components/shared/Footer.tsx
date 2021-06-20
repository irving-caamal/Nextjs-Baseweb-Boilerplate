import React from 'react';
import { Block } from 'baseui/block';
import { themedStyled } from '../../pages/_app';

const UberLogo = () => (
  <React.Fragment>
    <img
      src="https://res.cloudinary.com/dogfasxu0/Blog/BaseWebGoldMine/binary-thinking.svg"
      alt="Base Web"
      height="40px"
      width="97px"
    />
  </React.Fragment>
);

const StyledFooter = themedStyled(
  'footer',
  ({ $theme: { typography, sizing, colors } }) => ({
    ...typography.font300,
    bottom: 0,
    color: colors.contentPrimary,
    backgroundColor: colors.headerNavigationFill,
    width: '100%',
    marginTop: sizing.scale1400,
    paddingTop: sizing.scale1600,
    paddingBottom: sizing.scale1600,
    textAlign: 'center',
  }),
);

const StyledLink = themedStyled('a', ({ $theme }) => ({
  textDecoration: 'none',
  color: $theme.colors.contentPrimary,
  display: 'inline-block',
  cursor: 'pointer',
  marginLeft: '32px',
  ':first-child': {
    marginLeft: '0',
  },
  ':focus': {
    outline: `3px solid ${$theme.colors.accent}`,
    outlineOffset: '3px',
  },
  ':hover': {
    color: $theme.colors.primary,
    textDecoration: 'none',
  },
}));

function Footer() {
  return (
    <StyledFooter>
      <Block paddingBottom="scale1000">
        <StyledLink
          href="https://github.com/irvv17/Nextjs-Baseweb-Boilerplate"
          target="_blank"
        >
          Source Code on GitHub
        </StyledLink>
      </Block>
      <UberLogo />
    </StyledFooter>
  );
}

export default Footer;
