import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import './Page.css';

const cnPage = cn('Page');
const cnApp = cn('App');
const cnMain = cn('Main');

export const Page = () => (
  <RegistryConsumer>
    {registries => {
        // reading App registry
        const registry = registries[cnApp()];

        // taking desktop or mobile version
        const Main = registry.get(cnMain());

        return (
          <>
            <div className={cnPage()}>
              <div className={cnPage('Wrapper')}>
                <Header />
                <Main />
              </div>
            </div>
            <Footer />
          </>
        );
    }}
  </RegistryConsumer>
);
