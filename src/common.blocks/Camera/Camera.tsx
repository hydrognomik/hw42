import React from 'react';
import { cn } from '@bem-react/classname';

import video from './bitmap.png';

import './Camera.css';

const camera = cn('Camera');

export const Camera = () => (
  <div className={camera()}>
    <div className={camera('ImageWrapper')}>
      <img className={camera('Image')} touch-action="none" src={video} draggable />
    </div>
    <div className={camera('Controls')}>
      <div className={camera('Zoom')}>Приближение: <span className={camera('ZoomValue')}>0</span>%</div>
      <div className={camera('Brightness')}>Яркость: <span className={camera('BrightnessValue')}>0</span>%</div>
    </div>
  </div>
);
