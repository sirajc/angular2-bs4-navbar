import { Type } from '@angular/core';
import { Route, Data, ResolveData } from '@angular/router';

export enum MenuType {
  BRAND,
  LEFT,
  RIGHT
}

export interface RouteInfo {
    path: string;
    title: string;
    menuType: MenuType;
}
