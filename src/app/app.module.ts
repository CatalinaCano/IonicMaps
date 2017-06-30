import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MisTabsPage } from "../pages/mis-tabs/mis-tabs";
import { Geolocation } from '@ionic-native/geolocation';
import { ModalNuevoSitioPage } from "../pages/modal-nuevo-sitio/modal-nuevo-sitio";

@NgModule({
  declarations: [
    MyApp,
    MisTabsPage,
    ModalNuevoSitioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MisTabsPage,
    ModalNuevoSitioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
