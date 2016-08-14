import { RouterConfig } from '@angular/router';
import { HeroComponent } from './hero.component';

import { HeroDetail } from './hero-detail';
import { HeroListComponent } from './hero-list';

const CHILD_ROUTES: RouterConfig = [
  { path: '', pathMatch: 'full', component: HeroListComponent },
  { path: 'detail/:id', component: HeroDetail }
];

export const MODULE_ROUTES: RouterConfig = [
  { path: 'heroes', component: HeroComponent, children: [ ...CHILD_ROUTES ] }
]

export const MODULE_COMPONENTS = [
  HeroComponent, HeroListComponent, HeroDetail
]
