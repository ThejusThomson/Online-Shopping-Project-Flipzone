import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

@NgModule({
  declarations: [RegistrationComponent, LoginComponent, EditprofileComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],
  providers:[UserService],
  exports:[
    RegistrationComponent,
    LoginComponent,
    EditprofileComponent,
  ]
})
export class UserModule { }
