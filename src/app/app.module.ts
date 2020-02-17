import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ApiModule} from './api/api.module'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Page1Component,
    Page2Component,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
