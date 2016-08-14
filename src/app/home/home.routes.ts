import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about';
import { ContactComponent } from './contact';

export const MODULE_ROUTES: Route[] = [
  { path: '', pathMatch: 'full' , component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent }
]

export const MODULE_COMPONENTS = [
  HomeComponent,
  AboutUsComponent,
  ContactComponent
]
