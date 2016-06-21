"use strict";
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require('./heroes.component');
exports.HERO_ROUTES = [
    { path: '', component: heroes_component_1.HeroesComponent },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetail }
];

//# sourceMappingURL=hero.routes.js.map
