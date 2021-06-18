import * as React from 'react';
import { withStyle } from 'baseui';
import {
  Navigation,
  StyledNavItem,
  StyledNavLink,
} from 'baseui/side-navigation';
import Link from 'next/link';

import { themedStyled } from '../../pages/_app';

const SidebarWrapper = themedStyled('nav', (props: any) => {
  const $hideSideNavigation = props['$hideSideNavigation'];
  const $theme = props['$theme'];
  const $isOpen = props['$isOpen'];
  return {
    display: $isOpen ? 'block' : 'none',
    [props['$theme'].mediaQuery.medium]: {
      display: $hideSideNavigation ? 'none' : 'block',
      maxWidth: '16em',
    },
  };
});

const Routes = [];
const CustomStyledNavItem = withStyle(
  StyledNavItem,
  (props: { $theme; $active; $hasItemId; $level }) => ({
    paddingTop: props.$theme.sizing.scale200,
    paddingBottom: props.$theme.sizing.scale200,
    ...(props.$theme.name.startsWith('dark') && props.$active
      ? {
          background: props.$theme.colors.backgroundSecondary,
        }
      : {}),
    ...(!props.$hasItemId || props.$level === 1
      ? {
          textTransform: 'uppercase',
          ...(props.$level === 1
            ? props.$theme.typography.font350
            : props.$theme.typography.font250),
        }
      : {}),
  }),
);

const removeSlash = (path) => path && path.replace(/\/$/, '');

interface customNavProps {
  item?: { itemId: string };
  onSelect: () => void;
  onClick: () => void;
  onKeyDown: () => void;
}
const CustomNavItem = ({ item, ...props }: customNavProps) => (
  <CustomStyledNavItem $hasItemId={!!item.itemId} {...props} />
);

const CustomNavLink = (props: { href: string }) => {
  return props.href ? (
    <Link href={props.href}>
      <StyledNavLink {...props} />
    </Link>
  ) : (
    <StyledNavLink {...props} />
  );
};

const activePredicate = (item, location) =>
  (location && removeSlash(location) === removeSlash(item.itemId)) ||
  (!location && item.itemId === '/');

function Sidebar(props: { hideSideNavigation? }, { path }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <SidebarWrapper
      aria-label="primary"
      $isOpen={sidebarOpen}
      $hideSideNavigation={!!props.hideSideNavigation}
      onClick={() => sidebarOpen && setSidebarOpen(true)}
    >
      <Navigation
        activeItemId={path}
        activePredicate={activePredicate}
        items={Routes}
        overrides={{
          NavItem: CustomNavItem,
          NavLink: CustomNavLink,
        }}
      />
    </SidebarWrapper>
  );
}

export default Sidebar;
