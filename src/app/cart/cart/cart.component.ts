import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { Product } from 'src/app/product/product';
import { Cart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:Product;
  cart:Cart;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.cart=new Cart();
    this.route.paramMap.subscribe((map: ParamMap) => {
      let id = +map.get("prodid");
      this.userService.findByProdIdCart(id)
      .then((data: Cart) => {
       // this.cart = JSON.stringify(data);
          this.cart = data;
          
          //console.log(this.cart.prod[0].prodimage1);
          console.log(this.cart);
          //console.log(this.cart.prod.prodimage1);
      }, (err) => {
          console.log(err);
      })
  })
  
   
  }
 
}
      