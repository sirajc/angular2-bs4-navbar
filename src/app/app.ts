import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ROUTES } from './routes';

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  directives: [ Navbar, ROUTER_DIRECTIVES ]

})
@Routes(ROUTES)
export class AppComponent {
  public title = 'Angular2 Bootstrap4 Navbar';
}
