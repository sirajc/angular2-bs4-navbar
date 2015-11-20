import {Route, RouteDefinition} from 'angular2/router';
import {HeroComponent, HeroesComponent, HeroDetail} from './hero/hero';
import {HomeComponent} from './home/home';
import {AboutUsComponent} from './home/about/about';
import {ContactComponent} from './home/contact/contact';

interface RouteInfo {
  name: string,
  title: string,
  defaultChildRoute?: string
}

interface RouteInfoMap {
  [key:string] : RouteInfo
}

export const ROUTE_INFO: RouteInfoMap = {
  home: { name: 'Home', title: 'Angular2 Bootstrap4 Navbar'},
  heroes: { name: 'Heroes', title: 'Heroes', defaultChildRoute: 'List' },
  aboutUs: { name: 'AboutUs', title: 'About Us' },
  contact: { name: 'Contact', title: 'Contact' }
}

export const ROUTES: RouteDefinition[] = [
  { path: '/', component: HomeComponent, name:'Home'},
  { path: '/heroes/...', component: HeroComponent, name: 'Heroes'},
  { path: '/about', component: AboutUsComponent, name: 'AboutUs'},
  { path: '/contact', component: ContactComponent, name: 'Contact'}
]