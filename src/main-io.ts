import { provide } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent, APP_ROUTER_PROVIDERS } from './app';

bootstrap( AppComponent, [ APP_ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/angular2-bs4-navbar'}) ] );