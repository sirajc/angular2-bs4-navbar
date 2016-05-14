"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require('./heroes.component');
var hero_model_1 = require('./hero.model');
exports.Hero = hero_model_1.Hero;
var heroes_component_2 = require('./heroes.component');
exports.HeroesComponent = heroes_component_2.HeroesComponent;
var hero_detail_component_2 = require('./hero-detail.component');
exports.HeroDetail = hero_detail_component_2.HeroDetail;
var heroes_const_1 = require('./heroes.const');
exports.HEROES = heroes_const_1.HEROES;
var HeroComponent = (function () {
    function HeroComponent() {
    }
    HeroComponent = __decorate([
        core_1.Component({
            selector: 'hero-component',
            template: "\n    <div class=\"container-fluid\">\n      <h2>Marvel Heroes</h2>\n      <router-outlet></router-outlet>\n    </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/', component: heroes_component_1.HeroesComponent },
            { path: '/detail/:id', component: hero_detail_component_1.HeroDetail }
        ]), 
        __metadata('design:paramtypes', [])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;

//# sourceMappingURL=hero.js.map
