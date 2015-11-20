import {Component} from 'angular2/angular2';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './hero.model';
import { HEROES } from './heroes.const';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/hero/hero-detail.component.html',
  styles: [`
    .hero-detail {
      width: 300px;
      margin-left: 20px;
    }
  `],
  inputs: ['hero'],
  directives: [ROUTER_DIRECTIVES]
})
export class HeroDetail {
  public hero: Hero;
  private _id: number;

  constructor(private params: RouteParams) {
    this._id = Number.parseInt(params.get('id'));
    if(this._id) {
      this.hero = this.getHero(this._id);
    }
  }

  private getHero(_id: number) : Hero {
    var hero : Hero;
    HEROES.forEach(element => {
      if(element.id === _id) {
        hero = element;
      }
    });
    return hero;
  }
}