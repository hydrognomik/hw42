import React from 'react';
import { cn } from '@bem-react/classname';

import { Content } from '../Content/Content';

import './Main.css';

const main = cn('Main');

export const Main = () => (
  <main className={main()}>
    <div className={main('Header')}>Лента событий</div>
    <Content />
  </main>
);
