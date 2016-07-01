import { RouterConfig } from '@angular/router';

import { HeroDetail } from './hero-detail';
import { HeroListComponent } from './hero-list';

export const HERO_ROUTES: RouterConfig = [
  { path: '', pathMatch: 'full', component: HeroListComponent },
  { path: 'detail/:id', component: HeroDetail }
];