"use strict";
var home_component_1 = require('./home.component');
var about_1 = require('./about');
var contact_1 = require('./contact');
exports.MODULE_ROUTES = [
    { path: '', pathMatch: 'full', component: home_component_1.HomeComponent },
    { path: 'about', component: about_1.AboutUsComponent },
    { path: 'contact', component: contact_1.ContactComponent }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    about_1.AboutUsComponent,
    contact_1.ContactComponent
];

//# sourceMappingURL=home.routes.js.map
