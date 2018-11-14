import { withBemMod } from '@bem-react/core';
import { ILinkProps } from '../index';

export const LinkStateActive = withBemMod<ILinkProps>('Link', { state: 'active' });
