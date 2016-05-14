import { Type } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { HomeComponent } from './home/home';
import { AboutUsComponent } from './home/about/about';
import { ContactComponent } from './home/contact/contact';

interface RouteInfoMetadata {
  path: string;
  component: Type;
  title: string;
}

/**
 *  RouteInfo
 */
export declare class RouteInfo implements RouteInfoMetadata {
    path: string;
    component: Type;
    title: string;
    constructor({path, component, title}?: {
        path?: string;
        component?: Type;
        title?: string;
    });
}

export const ROUTES: RouteInfo[] = [
  { path: '/', component: HomeComponent, title: "Angular2 Bootstrap4 Navbar" },
  { path: '/heroes', component: HeroComponent, title: "Heroes" },
  { path: '/about', component: AboutUsComponent, title: "About Us" },
  { path: '/contact', component: ContactComponent, title: "Contact" }
]

export interface RouteInfoMap {
  [key:string]: RouteInfo
}

export const ROUTE_INFO: RouteInfoMap = {
  home: ROUTES[0],
  heroes: ROUTES[1],
  about: ROUTES[2],
  contact: ROUTES[3]
}
