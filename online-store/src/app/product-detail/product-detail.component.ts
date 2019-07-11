import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from "../cart.service";
import { PRODUCTS } from '../product-list/product-list.component';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = PRODUCTS[+params.get('id')];
    });
  }

  addCart(product) {
    this.cartService.addCart(product);
  }

}
