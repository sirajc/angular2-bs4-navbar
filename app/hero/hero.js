var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require('./heroes.component');
var hero_model_1 = require('./hero.model');
exports.Hero = hero_model_1.Hero;
var heroes_component_2 = require('./heroes.component');
exports.Heroes = heroes_component_2.Heroes;
var hero_detail_component_2 = require('./hero-detail.component');
exports.HeroDetail = hero_detail_component_2.HeroDetail;
var heroes_const_1 = require('./heroes.const');
exports.HEROES = heroes_const_1.HEROES;
var HeroComponent = (function () {
    function HeroComponent() {
    }
    HeroComponent = __decorate([
        angular2_1.Component({
            selector: 'hero-component',
            template: "\n    <h2>Marvel Heroes</h2>\n    <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            {
                path: '/detail',
                as: 'Detail',
                component: hero_detail_component_1.HeroDetail
            },
            {
                path: '/',
                as: 'List',
                component: heroes_component_1.Heroes
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], HeroComponent);
    return HeroComponent;
})();
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.js.map