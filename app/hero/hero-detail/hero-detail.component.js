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
var shared_1 = require('../hero-list/shared');
var HeroDetail = (function () {
    function HeroDetail(current, router) {
        this.current = current;
        this.router = router;
    }
    HeroDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.current.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.hero = _this.getHero(id);
        });
    };
    HeroDetail.prototype.getHero = function (_id) {
        var hero;
        shared_1.HEROES.forEach(function (element) {
            if (element.id === _id) {
                hero = element;
            }
        });
        return hero;
    };
    HeroDetail.prototype.gotoHeroes = function () {
        this.router.navigate(['/heroes']);
    };
    HeroDetail = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-detail',
            templateUrl: 'hero-detail.component.html',
            styles: ["\n    .hero-detail {\n      width: 300px;\n      margin-left: 20px;\n    }\n  "],
            inputs: ['hero'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], HeroDetail);
    return HeroDetail;
}());
exports.HeroDetail = HeroDetail;

//# sourceMappingURL=hero-detail.component.js.map
