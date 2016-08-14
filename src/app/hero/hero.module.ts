import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HERO_ROUTES } from './hero.routes';

import { HeroDetail } from './hero-detail';
import { HeroListComponent } from './hero-list';

const ROUTES: Route[] = [
  { path: 'heroes', component: HeroComponent, children: [ ...HERO_ROUTES ] }
]

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(ROUTES) ],
  declarations: [ HeroComponent, HeroDetail, HeroListComponent ],
  bootstrap: [ HeroComponent ]
})
export class HeroModule {}
