import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from 'react-device-detect';

import AppDesktop from './desktop.blocks/App';
import AppTouch from './touch.blocks/App';

import './index.css';

ReactDOM.render(
  isMobile ? <AppTouch /> : <AppDesktop />,
  document.getElementById('root'),
);
