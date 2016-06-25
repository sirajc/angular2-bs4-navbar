import { Route } from '@angular/router';

import { HeroDetail } from './hero-detail';
import { HeroListComponent } from './hero-list';
import { RouteInfo } from '../shared/router.metadata';

export const HERO_ROUTES: Route[] = [
  { path: '', component: HeroListComponent },
  { path: 'detail/:id', component: HeroDetail }
];