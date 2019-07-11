import { Component, OnInit } from '@angular/core';

export const PRODUCTS = [
  {
    "id": 1,
    "name": "哇哈哈",
    "description": "这是小孩爱喝的酸奶.",
    "price": 50,
  },
  {
    "id": 2,
    "name": "巧克力",
    "description": "这是小孩爱吃的巧克力.",
    "price": 40,
  },
  {
    "id": 3,
    "name": "布娃娃",
    "description": "这是小孩爱玩的玩具.",
    "price": 110
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

  share(product) {
    alert(product.name + "已经被分享了！");
  }

  onNotify(product) {
    window.alert("大于100元的商品:" + product.name + "已经上线了！！");
  }

}
