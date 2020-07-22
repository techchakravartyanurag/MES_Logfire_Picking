import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pick-cart',
  templateUrl: './pick-cart.page.html',
  styleUrls: ['./pick-cart.page.scss'],
})
export class PickCartPage implements OnInit {

  backHome() {
    alert('Back to Home');
  }

  nextCartPos() {
    alert('Direct to Cart Position Page');
    // RouterLink
  }

  constructor() { }

  ngOnInit() {
  }

}
