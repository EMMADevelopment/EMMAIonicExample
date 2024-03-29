import { Component } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  emma = window.plugins.EMMA;

  ionViewDidEnter() {
    const message = {
      type: this.emma.inAppTypes.NATIVEAD,
      templateId: 'default',
      batch: true,
      inAppResponse: (nativeAds: any[]) => {
        console.log(JSON.stringify(nativeAds));
        if (nativeAds.length) {
          const nativeAd = nativeAds[0];
          this.openNativeAd(nativeAd);
        }
      }
    };

    this.emma.inAppMessage(message);

    const deviceId = this.emma.getSyncDeviceId();
    console.log('Obtained deviceIdSync ' + deviceId);
  }

  sendInAppImpression(inAppType: string, campaignId: number) {
    this.emma.sendInAppImpression(inAppType, campaignId);
  }

  sendInAppClick(inAppType: string, campaignId: number) {
    this.emma.sendInAppClick(inAppType, campaignId);
  }

  openNativeAd(nativeAd: any) {
    this.emma.openNativeAd(nativeAd.id, nativeAd.cta, nativeAd.showOn);
  }
}
