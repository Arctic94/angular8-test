import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const Routes:Routes = [
  { path: 'welcome', component: WelcomeComponent, data: {animation: 'fader'} },
  { path: 'page1',      component: Page1Component, data: {animation: 'fader'} },
  { path: 'page2', component: Page2Component, data: {animation: 'fader'} },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      Routes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
