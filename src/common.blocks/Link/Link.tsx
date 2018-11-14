import React, { ReactElement } from 'react';
import { cn } from '@bem-react/classname';

import './Link.css';

type ReactText = string | number;
type ReactChild = ReactElement<any> | ReactText;

interface ILinkProps {
  className: string;
  children?: ReactChild;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const link = cn('Link');

const Link = ({ className, children, ...props }: ILinkProps) => (
  <a className={link(null, [className])} {...props}>
    {children}
  </a>
);

export default Link;
