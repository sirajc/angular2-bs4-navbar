import {Component, NgIf} from 'angular2/angular2';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './hero.model';
import { HEROES } from './heroes.const';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/hero/hero-detail.component.html',
  styles: [`
    .hero-detail {
      font-size: 120%;
      font-weight: 700;
    }
  `],
  inputs: ['hero'],
  directives: [NgIf, ROUTER_DIRECTIVES]
})
export class HeroDetail {
  public hero: Hero;
  private id: number;

  constructor(private params: RouteParams) {
    this.id = Number.parseInt(params.get('id'));
    if(this.id) {
      this.hero = this.getHero(this.id);
    }
  }

  private getHero(id: number) : Hero {
    var hero : Hero;
    HEROES.forEach(element => {
      if(element.id === id) {
        hero = element;
      }
    });
    return hero;
  }

}