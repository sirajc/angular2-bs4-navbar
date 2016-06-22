import { Route } from '@angular/router';

import { HeroDetail } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { RouteInfo } from '../shared/router.metadata';

export const HERO_ROUTES: Route[] = [
  { path: '', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetail }
];