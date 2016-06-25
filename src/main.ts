import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app/shared/router.service';
import { AppComponent } from './app';

bootstrap( AppComponent, [ APP_ROUTER_PROVIDERS ] );