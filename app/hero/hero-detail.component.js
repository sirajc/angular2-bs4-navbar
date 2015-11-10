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
var heroes_const_1 = require('./heroes.const');
var HeroDetail = (function () {
    function HeroDetail(params) {
        this.params = params;
        this.id = Number.parseInt(params.get('id'));
        if (this.id) {
            this.hero = this.getHero(this.id);
        }
    }
    HeroDetail.prototype.getHero = function (id) {
        var hero;
        heroes_const_1.HEROES.forEach(function (element) {
            if (element.id === id) {
                hero = element;
            }
        });
        return hero;
    };
    HeroDetail = __decorate([
        angular2_1.Component({
            selector: 'hero-detail',
            templateUrl: 'app/hero/hero-detail.component.html',
            styles: ["\n    .hero-detail {\n      width: 300px;\n      margin-left: 20px;\n    }\n  "],
            inputs: ['hero'],
            directives: [angular2_1.NgIf, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams])
    ], HeroDetail);
    return HeroDetail;
})();
exports.HeroDetail = HeroDetail;
//# sourceMappingURL=hero-detail.component.js.map