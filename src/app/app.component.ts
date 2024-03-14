import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { log } from 'console';
import { AnyARecord } from 'dns';
import { IN_APP_TYPE,
  loginRegisterUserParams, 
  eventParams, 
  orderParams, 
  productParams
         } from './types';

//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';

declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  EMMA: any; 
  
  //Button Controllers
  setRegistered : boolean = false;
  setLogged : boolean = false;
  setOrdered : boolean = false;
  setAdded : boolean = true;
  setTracked : boolean = true;
  setCanceled : boolean = true;
  banner : boolean = false;

  //OS
  isAndroid: boolean = false;
  isIos: boolean = false;

  //Parameters
  userParams : loginRegisterUserParams ={
    userId:"Prueba",
    email:"email.prueba@arkana.io"
  };
  eventToken : eventParams ={
    eventRequest: "7b358954cf16bc2b7830bb5307f80f96",
    eventAttributes: {IONIC: "working"}
  }
  order : orderParams ={
    orderId:"EMMA",
    totalPrice: 24.12,
    customerId:"EMMA",
    currencyCode: "USD",
    coupon: "",
    extras: {IONIC: "Working"}
  };
  product : productParams ={
    productId:"SDK",
      productName:"SDK",
      quantity:2,
      price:12.23,
      extras:{IONIC :"working"},
  }

  constructor(
    private platform: Platform,
    //private statusBar: StatusBar,
    private alertCtrl: AlertController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.isAndroid = this.platform.is("android");
      this.isIos = this.platform.is("ios");
      this.initEMMA();
      //this.statusBar.styleDefault();
     //this.splashScreen.hide();
    });
  }

  initEMMA() {
    document.addEventListener('onDeepLink', (event: any) => {
      const url = event.url;
      this.EMMA.handleLink(url);
      this.presentAlert('DeepLink', JSON.stringify(event));
    });

    document.addEventListener('onDeviceId', (event) => {
      const msg = JSON.stringify(event);
      this.presentAlert('DeviceId', msg);
    });

    this.EMMA = window.plugins.EMMA;

    const configuration= {
      sessionKey: 'emmaionicoJxuVt2o3',
      debug: true
    };

    this.EMMA.startSession(configuration);

    this.EMMA.trackLocation();

    this.EMMA.requestNotificationsPermission();

    const pushOptions = {
      classToOpen: 'io.emma.cordova.exampleionic.MainActivity',
      iconResource: 'notification'
    };

    this.EMMA.startPush(pushOptions);
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

  handleRegisterUser(){
    console.log("Register user");
    this.EMMA.registerUser(this.userParams);
    this.setRegistered = true;
  }
  handleLoginUser(){
    console.log("Login user");
    this.EMMA.loginUser(this.userParams);
    this.setLogged = true;
  }
  trackEvent(){
    console.log("Track event");
    this.EMMA.trackEvent(this.eventToken);
  }
  trackUserExtraInfo(){
    console.log("Add user 'TAG'");
    this.EMMA.trackUserExtraInfo({TAG : "EMMA_EXAMPLE"});
  }

  handleInAppMessage(type : String){
    switch(type){
      case "adball":
        this.EMMA.inAppMessage({type:IN_APP_TYPE.ADBALL});
        console.log("Show Adball");
        break;

        case "starview":
        this.EMMA.inAppMessage({type:IN_APP_TYPE.STARTVIEW});
        console.log("Show Starview");
        break;

        case "strip":
        this.EMMA.inAppMessage({type:IN_APP_TYPE.STRIP});
        console.log("Show Strip");
        break;

        case "nativeAd":
        const templateId : string = "batch-template2";
        this.EMMA.inAppMessage({type:IN_APP_TYPE.NATIVE_AD, templateId});
        console.log("Show Native Ad");
        break;

        case "showBanner":
          this.EMMA.inAppMessage({type:IN_APP_TYPE.BANNER});
          console.log("Show Native Ad");
          break;

    }

  }
  startOrder(){
    console.log("Start Order");
    this.EMMA.startOrder(this.order);
    this.setOrdered = true;
    this.setAdded = false;
    this.setTracked = false;
  }
  addProduct(){
    console.log("Add Product");
    this.EMMA.addProduct(this.product);
    this.setAdded = true;
    this.setTracked = false;
  }
  trackOrder(){
    console.log("TrackOrder");
    this.EMMA.trackOrder();
    this.setTracked = true;
    this.setCanceled = false;
  }
  cancelOrder(){
    console.log("Cancel Order");
    this.EMMA.cancelOrder(this.order.orderId);
    this.setCanceled = true;
    this.setOrdered = false; 
  }

  requestIDFA(){
    this.EMMA.requestTrackingWithIdfa();
  }  
}
