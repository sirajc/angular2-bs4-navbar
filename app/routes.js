"use strict";
var hero_1 = require('./hero/hero');
var home_1 = require('./home/home');
var about_1 = require('./home/about/about');
var contact_1 = require('./home/contact/contact');
(function (MenuType) {
    MenuType[MenuType["BRAND"] = 0] = "BRAND";
    MenuType[MenuType["LEFT"] = 1] = "LEFT";
    MenuType[MenuType["RIGHT"] = 2] = "RIGHT";
})(exports.MenuType || (exports.MenuType = {}));
var MenuType = exports.MenuType;
exports.ROUTES = [
    { path: '/', component: home_1.HomeComponent, title: "Angular2 Bootstrap4 Navbar", menuType: MenuType.BRAND },
    { path: '/heroes', component: hero_1.HeroComponent, title: "Heroes", menuType: MenuType.LEFT },
    { path: '/about', component: about_1.AboutUsComponent, title: "About Us", menuType: MenuType.RIGHT },
    { path: '/contact', component: contact_1.ContactComponent, title: "Contact", menuType: MenuType.RIGHT }
];

//# sourceMappingURL=routes.js.map
