import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Customer } from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  customer: Customer;
  response: any;

  constructor(private http :HttpClient,private router:Router,private route:ActivatedRoute,private userservice: UserService) { 
    this.customer=new Customer();
  }

  ngOnInit(): void {
  }

  submit(){
    this.response=this.userservice.newcustomer(this.customer);

  }

}
