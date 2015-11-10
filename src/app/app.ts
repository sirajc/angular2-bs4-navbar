import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroComponent} from './hero/hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [router-link]="['/Hero', 'List']">Marvel Heroes</a>
    <br>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/',
    redirectTo: '/hero'
  },
  {
    path: '/hero/...',
    as: 'Hero',
    component: HeroComponent
  }
])
export class AppComponent {
  public title = 'Tour of Heroes';
}
