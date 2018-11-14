import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from 'react-device-detect';

import './index.css';

// @ts-ignore
const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root'),
  );
};

isMobile
  ? import('./touch.blocks/App')
    .then(({ AppTouch }) => render(AppTouch))
  : import('./desktop.blocks/App')
    .then(({ AppDesktop }) => render(AppDesktop));
