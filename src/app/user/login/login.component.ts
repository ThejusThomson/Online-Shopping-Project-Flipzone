import { Component, OnInit } from '@angular/core';
import { Customer } from '../registration/registration';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response1: any;
  customer:Customer;

  constructor(private userservice:UserService, private http:HttpClient, private route:ActivatedRoute) {
    this.customer=new Customer();
   }

  ngOnInit():void {
  }
  logincheck()
  {
    this.response1=this.userservice.login(this.customer);
  }
}
