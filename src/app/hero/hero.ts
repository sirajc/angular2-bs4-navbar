import { Component } from 'angular2/angular2';
import { RouteConfig, RouteDefinition, ROUTER_DIRECTIVES } from 'angular2/router';
import { HeroDetail } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';

export { Hero } from './hero.model';
export { HeroesComponent } from './heroes.component';
export { HeroDetail } from './hero-detail.component';
export { HEROES } from './heroes.const';

@Component({
  selector:'hero-component',
  template: `
    <div class="container-fluid">
      <h2>Marvel Heroes</h2>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/detail', component: HeroDetail, name: 'Detail' },
    { path: '/', component: HeroesComponent, name: 'List' }
  ])
export class HeroComponent {

}

