import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { Product } from '../product';
import { Cart } from 'src/app/cart/cart/cart';

@Component({
  selector: 'app-proddescription',
  templateUrl: './proddescription.component.html',
  styleUrls: ['./proddescription.component.css']
})
export class ProddescriptionComponent implements OnInit {
  cloth:Product;
  cart=new Cart();
  

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map: ParamMap) => {
      let id = +map.get("prodid");
      this.userService.findByProdId(id)
      .then((data: Product) => {
          this.cloth = data;
      }, (err) => {
          console.log(err);
      })
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