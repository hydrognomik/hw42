import React from 'react';
import { cn } from '@bem-react/classname';

import Link from '../Link/Link';

import './Footer.css';

const footer = cn('Footer');

export const Footer = () => (
  <footer className={footer()}>
    <Link href="#" className={footer('Link')}>Помощь</Link>
    <Link href="#" className={footer('Link')}>Обратная связь</Link>
    <Link href="#" className={footer('Link')}>Разработчикам</Link>
    <Link href="#" className={footer('Link')}>Условия использования</Link>
    <Link
      href="https://wiki.yandex.ru/shri-2018-II/homework/Adaptivnaja-vjorstka/.files/license.pdf"
      target="_blank"
      className={footer('Link')}>
      Авторские права
    </Link>
  </footer>
);
