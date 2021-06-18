import { themedStyled } from '../../../pages/_app';

const SidebarWrapper = themedStyled('nav', (props: any) => {
  const $hideSideNavigation = props['$hideSideNavigation'];
  const $theme = props['$theme'];
  const $isOpen = props['$isOpen'];
  return {
    display: $isOpen ? 'block' : 'none',
    marginLeft: $theme.sizing.scale800,
    marginRight: props['$theme'].sizing.scale800,
    [props['$theme'].mediaQuery.large]: {
      display: $hideSideNavigation ? 'none' : 'block',
      maxWidth: '16em',
    },
  };
});

export default SidebarWrapper;
