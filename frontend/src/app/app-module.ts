import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NavbarComponent,
    HomeComponent,
    SettingsComponent,
    AboutComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
