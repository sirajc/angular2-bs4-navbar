"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_service_1 = require('./shared/router.service');
var app_1 = require('./app');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [router_service_1.APP_ROUTER_PROVIDERS, core_1.provide(common_1.APP_BASE_HREF, { useValue: '/angular2-bs4-navbar' })]);

//# sourceMappingURL=bootio.js.map
