import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

import AppCommon from '../common.blocks/App';
import { Camera } from './Camera/Camera';
import { Card } from './Card/Card';
import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Menu } from './Menu/Menu';
import { Main } from './Main/Main';
import { Page } from './Page/Page';

const cnApp = cn('App');
const cnCamera = cn('Camera');
const cnCard = cn('Card');
const cnContent = cn('Content');
const cnFooter = cn('Footer');
const cnHeader = cn('Header');
const cnMain = cn('Main');
const cnMenu = cn('Menu');
const cnPage = cn('Page');

// registry with touch versions of components
const touch = new Registry({ id: cnApp() });

touch.set(cnCamera(), Camera);
touch.set(cnCard(), Card);
touch.set(cnContent(), Content);
touch.set(cnFooter(), Footer);
touch.set(cnHeader(), Header);
touch.set(cnMain(), Main);
touch.set(cnMenu(), Menu);
touch.set(cnPage(), Page);

export const AppTouch = withRegistry(touch)(AppCommon);
