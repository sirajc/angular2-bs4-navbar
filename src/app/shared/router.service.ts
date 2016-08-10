import { provideRouter, RouterConfig } from '@angular/router';
import { Injectable } from '@angular/core';

import { HeroComponent } from '../hero';
import { HERO_ROUTES } from '../hero/hero.routes';
import { HomeComponent } from '../home';
import { AboutUsComponent } from '../home/about';
import { ContactComponent } from '../home/contact';
import { RouteInfo, MenuType } from './router.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '', pathMatch: 'full', component: HomeComponent, title: "Angular2 Bootstrap4 Navbar", menuType: MenuType.BRAND },
  { path: 'heroes', component: HeroComponent, title: "Heroes", menuType: MenuType.LEFT, children: [ ...HERO_ROUTES ] },
  { path: 'about', component: AboutUsComponent, title: "About Us", menuType: MenuType.RIGHT },
  { path: 'contact', component: ContactComponent, title: "Contact", menuType: MenuType.RIGHT }
];

export const APP_ROUTES: RouterConfig = [
  ...ROUTES
];

@Injectable()
export class RouterService {
  constructor() {}

  public getRoutes() : RouteInfo[] {
    return ROUTES;
  }
}

export const APP_COMPONENTS = [
  HomeComponent, HeroComponent, AboutUsComponent, ContactComponent
]
