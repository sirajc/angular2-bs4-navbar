import { Type } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { HomeComponent } from './home/home';
import { AboutUsComponent } from './home/about/about';
import { ContactComponent } from './home/contact/contact';

export enum MenuType {
  BRAND,
  LEFT,
  RIGHT
}

interface RouteInfoMetadata {
  path: string;
  component: Type;
  title: string;
  menuType: MenuType;
}

/**
 *  RouteInfo
 */
export declare class RouteInfo implements RouteInfoMetadata {
    path: string;
    component: Type;
    title: string;
    menuType: MenuType;
    constructor({path, component, title}?: {
        path?: string;
        component?: Type;
        title?: string;
        menuType?: MenuType;
    });
}

export const ROUTES: RouteInfo[] = [
  { path: '/', component: HomeComponent, title: "Angular2 Bootstrap4 Navbar", menuType: MenuType.BRAND },
  { path: '/heroes', component: HeroComponent, title: "Heroes", menuType: MenuType.LEFT },
  { path: '/about', component: AboutUsComponent, title: "About Us", menuType: MenuType.RIGHT },
  { path: '/contact', component: ContactComponent, title: "Contact", menuType: MenuType.RIGHT }
]