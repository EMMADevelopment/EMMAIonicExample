import { Component } from '@angular/core';

declare var window: any;


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ionViewDidEnter() {
    console.log('DID ENTER');
    const EMMA = window.plugins.EMMA;

    const message = {
      type: 'nativeAd',
      templateId: 'template-custom',
      batch: true,
      inAppResponse: this.onReceivedNativeAd
    };

    EMMA.inAppMessage(message);
  }

  onReceivedNativeAd(nativeAds) {
    console.log(JSON.stringify(nativeAds));
  }

}
