import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var paypal;

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
@ViewChild('paypal', { static: true }) paypalElementL: ElementRef;
  paidFor: boolean = false;
  ready: boolean = false;
  constructor() { }
product = {
  price: 777,
  description: 'blah',
  img: 'assets/picture_1.jpg'
};
  ngOnInit() {
  
  }
  readyToPay() {
    this.ready = true;
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
            description: this.product.description,
            amount: {
              currency_code: 'USD',
              value: this.product.price
            }
          }
        ]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.paidFor = true;
        console.log(order);
      },
      onError: err => {
        console.log(err);
        
      }
    }).render(this.paypalElementL.nativeElement);
  
  }
}
