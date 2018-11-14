import React from 'react';
import { cn } from '@bem-react/classname';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import './Header.css';

const header = cn('Header');

const menuItems = [
  {
    href: '#',
    text: 'События',
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
]

const Header = () => (
  <header className={header()}>
    <Logo />
    <Menu items={menuItems} />
  </header>
)

export default Header;
