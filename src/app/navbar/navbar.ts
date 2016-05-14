import { Component, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ROUTE_INFO } from '../routes';

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
  public routes;

  constructor() {
    this.routes = ROUTE_INFO;
  }
}