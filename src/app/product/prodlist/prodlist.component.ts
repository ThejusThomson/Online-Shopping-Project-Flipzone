import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { retryWhen } from "rxjs/operators";
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Cart } from 'src/app/cart/cart/cart';



@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {
  baseUrl = "http://localhost:8080/";
  cart=new Cart();
  cloth:Product;

  clothes:Product[]
  constructor(private userService: UserService,
    private route: ActivatedRoute,private http: HttpClient,
    private router: Router) { }
    private subscription: Subscription;

  ngOnInit(): void {
    this.route.paramMap.subscribe((map: ParamMap) => {
      let prodsubcategory = map.get("prodsubcategory");
      this.subscription = this.userService.findByProdsubcategory(prodsubcategory)
         
      .pipe(retryWhen(_ => {
        return interval(5000)
    }))
    .subscribe((data: Product[]) => {
        this.clothes = data;
    }, (err) => {
        console.log(err);
    });
})

}
addtocart(prod) {

  this.cart.product=prod;
  this.cart.quantity=1;
  this.cart.totalprice=this.cloth.prodprice;
  console.log(this.cart)
 // this.cart.product.push(prod);
  alert("Product is added successfully...");
  this.router.navigate(["/cart/:prodid"]);



       }
}