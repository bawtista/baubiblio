import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { APP_PRIMENG_MODULE } from './app.module-primeng';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { I18nModule } from '../i18n/i18n.module';
import { SigninComponent } from './pages/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_PRIMENG_MODULE,
    AppRoutingModule,
    I18nModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
