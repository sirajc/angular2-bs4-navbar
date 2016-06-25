import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Hero } from '../hero.model';
import { HeroDetail } from '../hero-detail';
import { HEROES } from './shared';

@Component({
  selector: 'hero-list',
  templateUrl: 'app/hero/hero-list/hero-list.component.html',
  styleUrls: ['app/hero/hero-list/hero-list.component.css'],
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