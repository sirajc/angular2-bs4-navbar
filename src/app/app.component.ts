import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import { Navbar } from './navbar';
import { RouterService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  directives: [ Navbar, ROUTER_DIRECTIVES ],
  providers: [ RouterService ]

})
export class AppComponent {
  public title = 'Angular2 Bootstrap4 Navbar';
}
