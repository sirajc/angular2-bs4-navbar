import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
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
export class HeroDetail implements OnInit {
  public hero: Hero;
  private sub: any;

  constructor(private current: ActivatedRoute, public router : Router) {

  }

  ngOnInit() {
     this.sub = this.current.params.subscribe(params => {
     let id = +params['id']; // (+) converts string 'id' to a number
     this.hero = this.getHero(id);
   });
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