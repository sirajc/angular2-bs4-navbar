import {Route} from 'angular2/router';
import {HeroComponent} from './hero/hero';
import {HomeComponent} from './home/home';
import {AboutUsComponent} from './home/about/about';
import {ContactComponent} from './home/contact/contact';

export var Routes = {
  home: new Route({ path: '/', component: HomeComponent, as: 'Home', data: { title: 'Angular2 Bootstrap4 Navbar' } }),
  heroes: new Route({ path: '/heroes/...', component: HeroComponent, as: 'Heroes', data: { title: 'Heroes', defaultChildRoute: 'List' } }),
  aboutUs: new Route({ path: '/about', component: AboutUsComponent, as: 'AboutUs', data: { title: 'About Us' } }),
  contact: new Route({ path: '/contact', component: ContactComponent, as: 'Contact', data: { title: 'Contact' } })
}

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);