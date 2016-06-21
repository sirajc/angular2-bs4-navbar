import { provideRouter, RouterConfig } from '@angular/router';
import { Injectable } from '@angular/core';

import { HeroComponent } from '../hero/hero';
import { HomeComponent } from '../home/home';
import { AboutUsComponent } from '../home/about/about';
import { ContactComponent } from '../home/contact/contact';
import { RouteInfo, MenuType } from './router.metadata';
import { HERO_ROUTES } from '../hero/hero.routes';

export const ROUTES: RouteInfo[] = [
  { path: '', component: HomeComponent, title: "Angular2 Bootstrap4 Navbar", menuType: MenuType.BRAND },
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

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];
