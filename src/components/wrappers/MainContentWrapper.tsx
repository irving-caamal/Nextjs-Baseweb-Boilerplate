import { themedStyled } from '../../pages/_app';

const ContentWrapper = themedStyled(
  'main',
  (props: { $theme?; $isSidebarOpen?; $maxWidth?; sizing?; mediaQuery? }) => ({
    position: 'relative',
    boxSizing: 'border-box',
    display: props.$isSidebarOpen ? 'none' : 'flex',
    paddingLeft: props.$theme.sizing.scale800,
    paddingRight: props.$theme.sizing.scale800,
    width: '100vw',
    outline: 'none',
    maxWidth: props.$maxWidth ? props.$maxWidth : '100em',
    [props.$theme.mediaQuery.medium]: {
      display: 'block',
      maxWidth: props.$maxWidth ? props.$maxWidth : '100em',
    },
  }),
);

export default ContentWrapper;
