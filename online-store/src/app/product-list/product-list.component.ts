import { Component, OnInit } from '@angular/core';

export const PRODUCTS = [
  {
    "name": "哇哈哈",
    "description": "这是小孩爱喝的酸奶."
  },
  {
    "name": "巧克力",
    "description": "这是小孩爱吃的巧克力."
  },
  {
    "name": "布娃娃",
    "description": "这是小孩爱玩的玩具."
  }
]

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
  constructor() {
    this.products = PRODUCTS;
  }

  ngOnInit() {
  }

  test() {

  }
}
