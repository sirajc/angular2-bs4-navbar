var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var app_1 = require('./app');
angular2_1.bootstrap(app_1.AppComponent, [router_1.ROUTER_PROVIDERS, angular2_1.provide(router_1.APP_BASE_HREF, { useValue: '/angular2-bs4-navbar' })]);

//# sourceMappingURL=bootio.js.map
