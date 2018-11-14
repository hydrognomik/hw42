import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import { Content as CommonContent } from '../Content/Content';

import './Main.css';

const cnApp = cn('App');
const cnConten = cn('Conten');
const cnMain = cn('Main');

export const Main = () => (
  <RegistryConsumer>
    {registries => {

      const registry = registries[cnApp()];
      let Content;

      try {
        Content = registry.get(cnConten());
      } catch (err) {
        Content = CommonContent;
      }

      return (
        <main className={cnMain()}>
          <div className={cnMain('Header')}>Лента событий</div>
          <Content />
        </main>
      );
    }}
  </RegistryConsumer>
);
