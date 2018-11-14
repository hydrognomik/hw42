import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import { Page as CommonPage } from './Page/Page';

const cnApp = cn('App');
const cnPage = cn('Page');

const App = () => (
  <RegistryConsumer>
    {registries => {

      const registry = registries[cnApp()];
      let Page;

      try {
        Page = registry.get(cnPage());
      } catch (err) {
        Page = CommonPage;
      }

      return (
        <Page />
      );
    }}
  </RegistryConsumer>
);

export default App;
