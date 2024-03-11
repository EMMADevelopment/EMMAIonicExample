import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { log } from 'console';

//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';

declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    //private statusBar: StatusBar,
    private alertCtrl: AlertController,
  ) {
    this.initializeApp();
  }

 
  initializeApp() {
    this.platform.ready().then(() => {
      this.initEMMA();
      //this.statusBar.styleDefault();
     //this.splashScreen.hide();
    });
  }

  initEMMA() {
    document.addEventListener('onDeepLink', (event: any) => {
      const url = event.url;
      EMMA.handleLink(url);
      this.presentAlert('DeepLink', JSON.stringify(event));
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

    EMMA.requestNotificationsPermission();

    const pushOptions = {
      classToOpen: 'io.emma.cordova.exampleionic.MainActivity',
      iconResource: 'notification'
    };

    EMMA.startPush(pushOptions);
  }

  presentAlert(title: string, msg: string) {
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
  requestIDFA(){
    window.plugins.EMMA.requestTrackingWithIdfa();
  }
    
  
}
