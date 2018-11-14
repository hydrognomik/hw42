import React from 'react';
import { cn } from '@bem-react/classname';

import Link from '../Link/Link';

import './Menu.css';

interface IMenuItem {
  href: string;
  text: string;
}

interface IMenuProps {
  items: IMenuItem[]
}

const menu = cn('Menu');

const Menu = ({ items }: IMenuProps) => (
  <React.Fragment>
    <nav className={menu()}>
      <ul className={menu('List')}>
        {items.map(item => (
          <li className={menu('Item')} key={item.text}>
            <Link href={item.href} className={menu('Link')}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className={menu('Icon')} />
  </React.Fragment>
)

export default Menu;
