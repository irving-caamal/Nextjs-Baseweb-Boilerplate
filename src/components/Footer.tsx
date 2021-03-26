import React from 'react';
import { Block } from 'baseui/block';
import Link from 'next/link';
import { themedStyled } from '../pages/_app';

const UberLogo = () => (
  <React.Fragment>
    <img
      src="https://res.cloudinary.com/dogfasxu0/image/upload/v1611551393/icons/percussion-instrument_ztqs5s.svg"
      alt="Base Web"
      height="40px"
      width="97px"
    />
    Instrumentos de Percusion 2021, Todos los derechos reservados
  </React.Fragment>
);

const StyledFooter = themedStyled(
  'footer',
  ({ $theme: { typography, sizing, colors, name } }) => ({
    ...typography.font300,
    // position: 'sticky',
    bottom: 0,
    color: colors.contentPrimary,
    backgroundColor: name.startsWith('light-theme')
      ? colors.mono200
      : colors.headerNavigationFill,
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
        <StyledLink href="https://github.com/uber/baseweb" target="_blank">
          GitHub
        </StyledLink>
        <StyledLink href="https://twitter.com/BaseWebReact" target="_blank">
          Twitter
        </StyledLink>
        <StyledLink
          href="https://join.slack.com/t/baseui/shared_invite/zt-5f1s4d10-1D2uywAECAG50m64PTH9cw"
          target="_blank"
        >
          Slack Chat room
        </StyledLink>
        <StyledLink
          href="https://github.com/uber/baseweb/releases"
          target="_blank"
        >
          Changelog
        </StyledLink>
        <Link href="/blog">
          <StyledLink href="/blog">Blog</StyledLink>
        </Link>
      </Block>
      <UberLogo />
    </StyledFooter>
  );
}

export default Footer;
