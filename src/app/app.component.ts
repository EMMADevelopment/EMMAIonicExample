import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
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
    private statusBar: StatusBar,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initEMMA();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initEMMA() {
    document.addEventListener('onDeepLink', (event) => {
      const msg = JSON.stringify(event);
      this.presentAlert('DeepLink', msg);
    });

    document.addEventListener('onDeviceId', (event) => {
      const msg = JSON.stringify(event);
      this.presentAlert('DeviceId', msg);
    });

    const EMMA = window.plugins.EMMA;

    const configuration = {
      sessionKey: 'emmaionicoJxuVt2o3',
      debug: true
    };

    EMMA.startSession(configuration);

    EMMA.trackLocation();

    const pushOptions = {
      classToOpen: 'io.emma.cordova.exampleionic.MainActivity',
      iconResource: 'notification'
    };

    EMMA.startPush(pushOptions);
  }

  presentAlert(title, msg) {
    this.alertCtrl
      .create({
        header: title,
        message: msg,
        buttons: ['OK']
      })
      .then((alert) => {
        alert.present();
      });
  }
}
