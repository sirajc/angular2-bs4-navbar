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
var heroes_const_1 = require('./heroes.const');
var HeroesComponent = (function () {
    function HeroesComponent() {
        this.heroes = heroes_const_1.HEROES;
        this.selectedHero = undefined;
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    HeroesComponent = __decorate([
        angular2_1.Component({
            selector: 'heroes',
            templateUrl: 'app/hero/heroes.component.html',
            styleUrls: ['app/hero/heroes.component.css'],
            directives: [hero_detail_component_1.HeroDetail, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroesComponent);
    return HeroesComponent;
})();
exports.HeroesComponent = HeroesComponent;

//# sourceMappingURL=heroes.component.js.map
