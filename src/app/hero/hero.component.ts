import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroDetail } from './hero-detail';
import { HeroListComponent } from './hero-list';

@Component({
  moduleId: module.id,
  selector:'hero-component',
  template: `
    <div class="container-fluid">
      <h2>Marvel Heroes</h2>
      <router-outlet></router-outlet>
    </div>
  `
})
export class HeroComponent {

}
