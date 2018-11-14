import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

import AppCommon from '../common.blocks/App';
import { Main } from './Main/Main';
import { Card } from './Card/Card';

const cnApp = cn('App');
const cnMain = cn('Main');
const cnCard = cn('Card');

// registry with touch versions of components
const touch = new Registry({ id: cnApp() });

touch.set(cnMain(), Main);
touch.set(cnCard(), Card);

export default withRegistry(touch)(AppCommon);
