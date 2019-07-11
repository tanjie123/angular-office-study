import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = PRODUCTS[+params.get('id')];
    });
  }


}
