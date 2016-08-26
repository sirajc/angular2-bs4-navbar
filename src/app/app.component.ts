import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `

})
export class AppComponent {
  public title = 'Angular2 Bootstrap4 Navbar';
}
