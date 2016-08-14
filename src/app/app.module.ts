import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home';
import { HeroModule } from './hero';


import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, HomeModule, HeroModule, RouterModule.forRoot([]) ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
