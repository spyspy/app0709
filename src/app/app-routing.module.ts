import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { ErrorComponent } from './error/error.component';
import { Content1Component } from './content/content1/content1.component';
import { Content2Component } from './content/content2/content2.component';
import { Content3Component } from './content/content3/content3.component';

//Router加入!!!
const defaultRoute: Route =  { path: '', redirectTo: 'error', pathMatch: 'full' } ;
const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  defaultRoute,
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'content', component: ContentComponent,
    children:[
    {path: '', redirectTo: 'content', pathMatch: 'full' },
    {path: 'content1', component: Content1Component},
    {path: 'content2', component: Content2Component},
    {path: 'content3', component: Content3Component}
  ] },
  { path: 'error', component: ErrorComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) //Router加入!!!
  ],
  exports:[RouterModule], //Router加入!!!
  declarations: []
})
export class AppRoutingModule { }
