import React from 'react';
import { cn } from '@bem-react/classname';

import Link from '../Link/Link';

import './Logo.css';

const logo = cn('Logo');

const Logo = () => (
  <div className={logo()}>
    <Link href="//yandex.ru" className={logo('Ya')} />
    <Link href="#" className={logo('YaSub')}/>
  </div>
);

export default Logo;
