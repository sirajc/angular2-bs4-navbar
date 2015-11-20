var hero_1 = require('./hero/hero');
var home_1 = require('./home/home');
var about_1 = require('./home/about/about');
var contact_1 = require('./home/contact/contact');
exports.ROUTE_INFO = {
    home: { name: 'Home', title: 'Angular2 Bootstrap4 Navbar' },
    heroes: { name: 'Heroes', title: 'Heroes', defaultChildRoute: 'List' },
    aboutUs: { name: 'AboutUs', title: 'About Us' },
    contact: { name: 'Contact', title: 'Contact' }
};
exports.ROUTES = [
    { path: '/', component: home_1.HomeComponent, name: 'Home' },
    { path: '/heroes/...', component: hero_1.HeroComponent, name: 'Heroes' },
    { path: '/about', component: about_1.AboutUsComponent, name: 'AboutUs' },
    { path: '/contact', component: contact_1.ContactComponent, name: 'Contact' }
];

//# sourceMappingURL=routes.js.map
