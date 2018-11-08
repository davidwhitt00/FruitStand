import { Injectable } from '@angular/core';
import { Products } from  '../models/products';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  private db ="http://localhost:3000/api/product/"
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]>
  { return this.http.get<Products[]>(this.db)}

}
