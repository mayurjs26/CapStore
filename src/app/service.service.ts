import { Inventory } from './model/Inventory';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Product } from './model/Product';
import { Order } from './model/Order';
import { MostView } from './model/MostView';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  base_url = "http://localhost:8880";

  constructor(private http: HttpClient) { }


   getproductbymerchant(merchantid: number){
     console.log(merchantid);
     return this.http.get<Product[]>(`${this.base_url}/productofmerchant/${merchantid}`);
   }


  getAllOrder(){
    return this.http.get<Order[]>(this.base_url+"/allorders");
  }

  getmostviewed(){
    return this.http.get<MostView[]>(this.base_url+"/viewbyproduct");
  }
}
