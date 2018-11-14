import React from 'react';
import { cn } from '@bem-react/classname';

import './Button.css';

const cnButton = cn('Button');

const Button = ({ text }: { text: string }) => (
  <button className={cnButton()}>{text}</button>
);

export default Button;
