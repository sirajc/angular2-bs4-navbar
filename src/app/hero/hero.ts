import { Component } from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { HeroDetail } from './hero-detail.component';
import { Heroes } from './heroes.component';

export { Hero } from './hero.model';
export { Heroes } from './heroes.component';
export { HeroDetail } from './hero-detail.component';
export { HEROES } from './heroes.const';

@Component({
  selector:'hero-component',
  template: `
    <h2>Marvel Heroes</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/detail',
    as: 'Detail',
    component: HeroDetail
  },
  {
    path: '/',
    as: 'List',
    component: Heroes
  }
])
export class HeroComponent {

}
