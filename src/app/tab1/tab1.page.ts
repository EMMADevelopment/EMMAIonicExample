import { Component } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ionViewDidEnter() {
    const EMMA = window.plugins.EMMA;

    const message = {
      type: EMMA.inAppTypes.BANNER
    };

    EMMA.inAppMessage(message);
  }
}
