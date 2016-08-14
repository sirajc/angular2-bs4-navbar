"use strict";
var hero_component_1 = require('./hero.component');
var hero_detail_1 = require('./hero-detail');
var hero_list_1 = require('./hero-list');
var CHILD_ROUTES = [
    { path: '', pathMatch: 'full', component: hero_list_1.HeroListComponent },
    { path: 'detail/:id', component: hero_detail_1.HeroDetail }
];
exports.MODULE_ROUTES = [
    { path: 'heroes', component: hero_component_1.HeroComponent, children: CHILD_ROUTES.slice() }
];
exports.MODULE_COMPONENTS = [
    hero_component_1.HeroComponent, hero_list_1.HeroListComponent, hero_detail_1.HeroDetail
];

//# sourceMappingURL=hero.routes.js.map
