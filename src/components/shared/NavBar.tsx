import * as React from 'react';
import { AppNavBar, setItemActive, NavItemT } from 'baseui/app-nav-bar';
import { ChevronDown, Delete, Overflow, Upload } from 'baseui/icon';

const Nav: React.FC = function () {
  const [mainItems, setMainItems] = React.useState<NavItemT[]>([
    { icon: Upload, label: 'Inicio', active: true },
    {
      active: false,
      icon: ChevronDown,
      label: 'Best UI Framework',
      navExitIcon: Delete,
      children: [
        { icon: Upload, label: 'Secondary A' },
        { icon: Upload, label: 'Secondary B' },
      ],
    },
  ]);

  function handleMainItemSelect(item: NavItemT) {
    setMainItems((prev) => setItemActive(prev, item));
  }
  return (
    <AppNavBar
      title="Base web UI boilerplate"
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
      username="Umka Marshmallow"
      usernameSubtitle="5 Stars"
      userItems={[
        { icon: Overflow, label: 'User A' },
        { icon: Overflow, label: 'User B' },
      ]}
      onUserItemSelect={(item) => console.log(item)}
    />
  );
};

export default Nav;
