import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroComponent} from './hero/hero';
import {Navbar} from './navbar/navbar';
import {ROUTES} from './routes';

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, Navbar]
})
@RouteConfig(ROUTES)
export class AppComponent {
  public title = 'Tour of Heroes';
}
