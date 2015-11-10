import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroComponent} from './hero/hero';
import {Navbar} from './navbar/navbar';
import {APP_ROUTES} from './route.config';

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
    `
  ],
  directives: [ROUTER_DIRECTIVES, Navbar]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  public title = 'Tour of Heroes';
}
