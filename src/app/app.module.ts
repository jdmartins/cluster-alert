import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AlertModalComponent} from '../components/alert-modal/alert-modal';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Platform } from 'ionic-angular';


// Native modules
import { Shake } from '@ionic-native/shake';

function getProviders() {

return [
      Shake,StatusBar,
      SplashScreen,
      { provide: ErrorHandler, useClass: IonicErrorHandler }
    ];
 
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertModalComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertModalComponent
  ],
  providers: getProviders()
})
export class AppModule {}
