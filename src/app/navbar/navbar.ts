import {Component} from 'angular2/angular2';
import {Route, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from '../route.config';

@Component({
  selector: 'navbar',
  properties: ['routes'],
  templateUrl: 'app/navbar/navbar.html',
  styles: [
    `
    .my-nav {
      font-weight: 700;
      font-size: 150%;
      color: green;
    }
    `
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class Navbar {
  public routes;

  constructor() {
    this.routes = Routes;
    console.log(this.routes);
  }
}