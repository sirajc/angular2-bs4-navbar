import { Type } from '@angular/core';
import { Route, Data, ResolveData } from '@angular/router';

export enum MenuType {
  BRAND,
  LEFT,
  RIGHT
}

export interface RouteInfo {
    path: string;
    pathMatch?: 'full' | 'prefix';
    component: Type | string;
    redirectTo?: string;
    outlet?: string;
    canActivate?: any[];
    canDeactivate?: any[];
    data?: Data;
    resolve?: ResolveData;
    children?: Route[];
    title: string;
    menuType: MenuType;
}
