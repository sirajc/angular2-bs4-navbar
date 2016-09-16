import { Component } from '@angular/core';
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
