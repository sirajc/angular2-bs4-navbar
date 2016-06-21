import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './shared/router.service';
import { AppComponent } from './app';

bootstrap( AppComponent, [ APP_ROUTER_PROVIDERS ] );