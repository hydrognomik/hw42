import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import Logo from '../Logo/Logo';
import { Menu as CommonMenu } from '../Menu/Menu';

import './Header.css';

const cnApp = cn('App');
const cnHeader = cn('Header');
const cnMenu = cn('Menu');

const menuItems = [
  {
    href: '#',
    text: 'События',
    state: 'active',
  },
  {
    href: '#',
    text: 'Сводка',
  },
  {
    href: '#',
    text: 'Устройства',
  },
  {
    href: '#',
    text: 'Сценарии',
  },
];

export const Header = () => (
  <RegistryConsumer>
    {registries => {

      const registry = registries[cnApp()];
      let Menu;

      try {
        Menu = registry.get(cnMenu());
      } catch (err) {
        Menu = CommonMenu;
      }

      return (
        <header className={cnHeader()}>
          <Logo />
          <Menu items={menuItems} />
        </header>
      );
    }}
  </RegistryConsumer>
);
