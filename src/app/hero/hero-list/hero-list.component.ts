import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Hero } from '../hero.model';
import { HeroDetail } from '../hero-detail';
import { HEROES } from './shared';

@Component({
  moduleId: module.id,
  selector: 'hero-list',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css'],
  directives: [HeroDetail, ROUTER_DIRECTIVES]
})
export class HeroListComponent {
  public heroes = HEROES;
  public selectedHero: Hero = undefined;

  public onSelect(hero: Hero){
    this.selectedHero = hero;
  }
  public getSelectedClass(hero: Hero) {
    return {'selected': hero === this.selectedHero}
  }
}