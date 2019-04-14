import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initEMMA();
    });
  }

  initEMMA() {

    const EMMA = window.plugins.EMMA;

    const configuration = {
        sessionKey: 'emmaionicoJxuVt2o3',
        debug: true
    };

   EMMA.startSession(configuration);

    const pushOptions = {
      classToOpen: 'io.emma.cordova.exampleionic.MainActivity',
      iconResource: 'notification'
    };

    EMMA.startPush(pushOptions);
  }
}
