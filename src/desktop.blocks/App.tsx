import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

import AppCommon from '../common.blocks/App';
import { Main } from './Main/Main';
import { Card } from './Card/Card';
import { Camera } from './Camera/Camera';

const cnApp = cn('App');
const cnMain = cn('Main');
const cnCard = cn('Card');
const cnCamera = cn('Camera');

// registry with desktop versions of components
const desktop = new Registry({ id: cnApp() });

desktop.set(cnMain(), Main);
desktop.set(cnCard(), Card);
desktop.set(cnCamera(), Camera);

export default withRegistry(desktop)(AppCommon);
