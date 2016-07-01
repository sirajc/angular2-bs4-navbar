"use strict";
var hero_detail_1 = require('./hero-detail');
var hero_list_1 = require('./hero-list');
exports.HERO_ROUTES = [
    { path: '', pathMatch: 'full', component: hero_list_1.HeroListComponent },
    { path: 'detail/:id', component: hero_detail_1.HeroDetail }
];

//# sourceMappingURL=hero.routes.js.map
