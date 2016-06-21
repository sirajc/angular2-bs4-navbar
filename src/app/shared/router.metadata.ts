import { Type } from '@angular/core';
import { Route } from '@angular/router';

export enum MenuType {
  BRAND,
  LEFT,
  RIGHT
}

export interface RouteInfo {
    path: string;
    terminal?: boolean;
    component: Type | string;
    outlet?: string;
    canActivate?: any[];
    canDeactivate?: any[];
    redirectTo?: string;
    children?: Route[];
    title: string;
    menuType: MenuType;
}
