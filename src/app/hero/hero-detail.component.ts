import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, RouteSegment } from '@angular/router';
import { Hero } from './hero.model';
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

  constructor(private current: RouteSegment, public router : Router) {
    this._id = Number(current.getParam('id'));
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

  public gotoHeroes() {
    this.router.navigate(['/heroes']);
  }
}