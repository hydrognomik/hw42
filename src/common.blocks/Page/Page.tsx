import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import { Footer as CommonFooter } from '../Footer/Footer';
import { Header as CommonHeader } from '../Header/Header';

import './Page.css';

const cnApp = cn('App');
const cnFooter = cn('Footer');
const cnHeader = cn('Header');
const cnMain = cn('Main');
const cnPage = cn('Page');

export const Page = () => (
  <RegistryConsumer>
    {registries => {
        // reading App registry
        const registry = registries[cnApp()];
        let Footer;
        let Header;

        // taking desktop or mobile version
        const Main = registry.get(cnMain());

        try {
          Footer = registry.get(cnFooter());
        } catch (err) {
          Footer = CommonFooter;
        }

        try {
          Header = registry.get(cnHeader());
        } catch (err) {
          Header = CommonHeader;
        }

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
