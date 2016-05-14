"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var app_1 = require('./app');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [router_1.ROUTER_PROVIDERS, core_1.provide(common_1.APP_BASE_HREF, { useValue: '/angular2-bs4-navbar' })]);

//# sourceMappingURL=bootio.js.map
