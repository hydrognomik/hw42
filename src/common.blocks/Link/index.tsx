import React, { ReactElement } from 'react';
import { compose, IClassNameProps } from '@bem-react/core';

import { Link as Base } from './Link';
import { LinkStateActive } from './_state/Link_state_active';

type ReactText = string | number;
type ReactChild = ReactElement<any> | ReactText;

export interface ILinkProps extends IClassNameProps {
  className: string;
  children?: ReactChild;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';

  // list of all modifiers
  state?: 'active';
}

export const Link = compose(
  LinkStateActive,
)(Base);
