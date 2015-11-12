var router_1 = require('angular2/router');
var hero_1 = require('./hero/hero');
var home_1 = require('./home/home');
var about_1 = require('./home/about/about');
var contact_1 = require('./home/contact/contact');
exports.Routes = {
    home: new router_1.Route({ path: '/', component: home_1.HomeComponent, name: 'Home', data: { title: 'Angular2 Bootstrap4 Navbar' } }),
    heroes: new router_1.Route({ path: '/heroes/...', component: hero_1.HeroComponent, name: 'Heroes', data: { title: 'Heroes', defaultChildRoute: 'List' } }),
    aboutUs: new router_1.Route({ path: '/about', component: about_1.AboutUsComponent, name: 'AboutUs', data: { title: 'About Us' } }),
    contact: new router_1.Route({ path: '/contact', component: contact_1.ContactComponent, name: 'Contact', data: { title: 'Contact' } })
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });
//# sourceMappingURL=route.config.js.map