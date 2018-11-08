import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  fruitPic = '../../img/fruitMain.jpg'
  products : Products[]

  constructor(private prodService:ProductService) { }

  ngOnInit() {
    this.getProduce()
  }
  getProduce(){
    this.prodService.getProducts().subscribe(Products => this.products = Products)
  }
}
