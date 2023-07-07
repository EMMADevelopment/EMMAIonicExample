import { Component } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  ionViewDidEnter() {
    const EMMA = window.plugins.EMMA;

    const tags = {
      tag1: 'tag1 value'
    };

    EMMA.trackUserExtraInfo(tags);

    const eventRequest = {
      token: 'token'
    };

    EMMA.trackEvent(eventRequest);

    EMMA.updatePostbackConversionValueSkad4({
      conversionValue: 4,
      coarseValue: 'high',
      lockWindow: false
    });

    const loginRegister = {
      userId: 'user23564',
      email: 'usermail@email.com'
    };

    EMMA.registerUser(loginRegister);
    EMMA.loginUser(loginRegister);

    const order = {
      orderId: 'L-X98421',
      totalPrice: 23.4,
      currencyCode: 'EUR'
    };

    EMMA.startOrder(order);

    const product = {
      productId: 'PROD-ORDER1',
      productName: 'Chaqueta-cuadros',
      quantity: 1,
      price: 23.4
    };

    EMMA.addProduct(product);

    EMMA.trackOrder();
  }
}
