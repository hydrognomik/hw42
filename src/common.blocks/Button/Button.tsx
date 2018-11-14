import React from 'react';
import { cn } from '@bem-react/classname';

import { IButtonProps } from './index';

import './Button.css';

const cnButton = cn('Button');

export const Button = ({ className, text, ...props }: IButtonProps) => (
  <button className={cnButton(null, [className])}>{text}</button>
);
