import { compose, IClassNameProps } from '@bem-react/core';

import { Button as Base } from './Button';
import { ButtonThemeYellow } from './_theme/Button_theme_yellow';

export interface IButtonProps extends IClassNameProps {
  text: string;

  // list of all modifiers
  theme?: 'yellow';
}

export const Button = compose(
  ButtonThemeYellow,
)(Base);
