import React from 'react';
import { cn } from '@bem-react/classname';

import { ILinkProps } from './index';

import './Link.css';

const link = cn('Link');

export const Link = ({ className, children, ...props }: ILinkProps) => (
  <a className={link(null, [className])} {...props}>
    {children}
  </a>
);
