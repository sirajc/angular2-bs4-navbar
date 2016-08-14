import { Injectable } from '@angular/core';
import { HERO_ROUTES } from '../hero/hero.routes';
import { RouteInfo, MenuType } from './router.metadata';

export const ROUTES_BS4: RouteInfo[] = [
  { path: '', title: "Angular2 Bootstrap4 Navbar", menuType: MenuType.BRAND },
  { path: 'heroes', title: "Heroes", menuType: MenuType.LEFT },
  { path: 'about', title: "About Us", menuType: MenuType.RIGHT },
  { path: 'contact', title: "Contact", menuType: MenuType.RIGHT }
];

@Injectable()
export class RouterService {
  constructor() {}

  public getRoutes() : RouteInfo[] {
    return ROUTES_BS4;
  }
}
