import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
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
@Routes([
    { path: '/', component: HeroesComponent },
    { path: '/detail/:id', component: HeroDetail }
  ])
export class HeroComponent {

}

