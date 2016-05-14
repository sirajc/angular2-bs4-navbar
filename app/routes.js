"use strict";
var hero_1 = require('./hero/hero');
var home_1 = require('./home/home');
var about_1 = require('./home/about/about');
var contact_1 = require('./home/contact/contact');
exports.ROUTES = [
    { path: '/', component: home_1.HomeComponent, title: "Angular2 Bootstrap4 Navbar" },
    { path: '/heroes', component: hero_1.HeroComponent, title: "Heroes" },
    { path: '/about', component: about_1.AboutUsComponent, title: "About Us" },
    { path: '/contact', component: contact_1.ContactComponent, title: "Contact" }
];
exports.ROUTE_INFO = {
    home: exports.ROUTES[0],
    heroes: exports.ROUTES[1],
    about: exports.ROUTES[2],
    contact: exports.ROUTES[3]
};

//# sourceMappingURL=routes.js.map
