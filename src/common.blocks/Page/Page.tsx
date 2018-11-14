import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './Page.css';

const page = cn('Page');
const cnApp = cn('App');
const cnMain = cn('Main');

const Page = () => (
  <RegistryConsumer>
    {registries => {
        // reading App registry
        const registry = registries[cnApp()];

        // taking desktop or mobile version
        const Main = registry.get(cnMain());

        return (
          <>
            <div className={page()}>
              <div className={page('Wrapper')}>
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

export default Page;
