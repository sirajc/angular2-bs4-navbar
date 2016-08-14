import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about';
import { ContactComponent } from './contact';


const ROUTES: Route[] = [
  { path: '', pathMatch: 'full' , component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent }
]
@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  declarations: [ HomeComponent, AboutUsComponent, ContactComponent ]
})
export class HomeModule {}
