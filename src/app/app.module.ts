import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_COMPONENTS } from './shared';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './shared';

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(APP_ROUTES) ],
  declarations: [ ...APP_COMPONENTS, AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
