import { Component, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MenuType, RouteInfo } from '../shared/router.metadata';
import { RouterService } from '../shared/router.service';

@Component({
  selector: 'navbar',
  properties: ['routes'],
  templateUrl: 'app/navbar/navbar.html',
  styles: [
    `
    .nav-link {
      color: #eee !important;
    }
    `
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class Navbar {
  public menuItems: RouteInfo[];

  constructor(private routerService : RouterService ) {
    this.menuItems = routerService.getRoutes();
  }

  public getMenuItemClasses(menuItem: RouteInfo) {
    let menuItemClass = {
      "nav-item": menuItem.menuType === MenuType.LEFT || menuItem.menuType === MenuType.RIGHT,
      "pull-xs-right": menuItem.menuType === MenuType.RIGHT
    }
    return menuItemClass;
  }

  public getMenuItemAnchorClasses(menuItem: RouteInfo) {
    let menuItemAnchorClass = {
      "navbar-brand": menuItem.menuType === MenuType.BRAND,
      "nav-link": menuItem.menuType === MenuType.LEFT || menuItem.menuType === MenuType.RIGHT
    }
    return menuItemAnchorClass;
  }
}