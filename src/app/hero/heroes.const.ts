import { RouteDefinition } from 'angular2/router';
import { Hero } from './hero.model';
import { HeroDetail, HeroesComponent } from './hero';

export const HEROES: Hero[] = [
  { "id": 11, "name": "Iron Man" },
  { "id": 12, "name": "Spider Man" },
  { "id": 13, "name": "Captain America" },
  { "id": 14, "name": "Hulk" },
  { "id": 15, "name": "Thor" },
  { "id": 16, "name": "Black Widow" },
  { "id": 17, "name": "Daredevil" },
  { "id": 18, "name": "Hawkeye" },
  { "id": 19, "name": "Wolverine" },
  { "id": 20, "name": "Magneto" }
];

export const HERO_ROUTES: RouteDefinition[] = [
  { path: '/detail', component: HeroDetail, name: 'Detail' },
  { path: '/', component: HeroesComponent, name: 'List' }
]