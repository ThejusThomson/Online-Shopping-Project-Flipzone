import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './registration/registration';
import { Product } from '../product/product';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Cart } from '../cart/cart/cart';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  response:any;
  baseUrl = "http://localhost:8080/";
  response1: any;

  constructor(private http: HttpClient,private router:Router) { }

  newcustomer(cust:Customer)
  {
    this.http.post("http://localhost:8080/customer/",cust).subscribe((response)=>{
      this.response=response;
      console.log(this.response);
      alert("Registration Successful!");
      this.router.navigate(["/login"])
    })
    return this.response;      
  }
  login(cus:Customer)
  {
    this.http.post<Customer>("http://localhost:8080/login/",cus).subscribe((response)=>{
      this.response1=response;
      console.log(this.response1);
    if(this.response1==true)
    {
      alert("Login Successful!")
      this.router.navigate(["/home"])
    }
    else
    {
      alert("Login Failed")
    }
  })
    return this.response1;
  }

  updatecustomer(cust:Customer)
  {
     this.http.put<Customer>("http://localhost:8080/cust/"+cust.email,cust)
    .subscribe((response)=>{
      this.response=response;
      console.log(this.response);
    })
    alert("edited ");
    return this.response;
  
  }    

  findByProdsubcategory( prodsubcategory: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "subcategory/" + prodsubcategory);
  }
  findByProdId(prodid: number): Promise<Product> {
    console.log("Service: ",prodid);
    return this.http.get<Product>(this.baseUrl + "prod/" + prodid).toPromise();
  }
  findByProdIdCart(prodid: number): Promise<Cart> {
    return this.http.get<Cart>(this.baseUrl + "cart/" + prodid).toPromise();
  }
  
  updateCart(cart: Cart): Observable<any> {
          return this.http.put<any>(this.baseUrl + "cart", cart);        
      }
  
}