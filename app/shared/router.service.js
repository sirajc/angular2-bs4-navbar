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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var hero_1 = require('../hero');
var hero_routes_1 = require('../hero/hero.routes');
var home_1 = require('../home');
var about_1 = require('../home/about');
var contact_1 = require('../home/contact');
var router_metadata_1 = require('./router.metadata');
exports.ROUTES = [
    { path: '', component: home_1.HomeComponent, title: "Angular2 Bootstrap4 Navbar", menuType: router_metadata_1.MenuType.BRAND },
    { path: 'heroes', component: hero_1.HeroComponent, title: "Heroes", menuType: router_metadata_1.MenuType.LEFT, children: hero_routes_1.HERO_ROUTES.slice() },
    { path: 'about', component: about_1.AboutUsComponent, title: "About Us", menuType: router_metadata_1.MenuType.RIGHT },
    { path: 'contact', component: contact_1.ContactComponent, title: "Contact", menuType: router_metadata_1.MenuType.RIGHT }
];
exports.APP_ROUTES = exports.ROUTES.slice();
var RouterService = (function () {
    function RouterService() {
    }
    RouterService.prototype.getRoutes = function () {
        return exports.ROUTES;
    };
    RouterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RouterService);
    return RouterService;
}());
exports.RouterService = RouterService;
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.APP_ROUTES)
];

//# sourceMappingURL=router.service.js.map
