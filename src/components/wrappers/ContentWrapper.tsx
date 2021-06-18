import { themedStyled } from '../../pages/_app';

const ContentWrapper = themedStyled(
  'main',
  (props: { $theme?; $isSidebarOpen?; $maxWidth?; sizing?; mediaQuery? }) => ({
     width: '100%',
    [props.$theme.mediaQuery.medium]: {
      display: 'block',
    },
  }),
);

export default ContentWrapper;
