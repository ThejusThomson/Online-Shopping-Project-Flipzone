import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WtopwearComponent } from './product/wtopwear/wtopwear.component';
import { ProdlistComponent } from './product/prodlist/prodlist.component';
import { ProddescriptionComponent } from './product/proddescription/proddescription.component';
import { CartComponent } from './cart/cart/cart.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register", component:RegistrationComponent},
  {path:"wtopwear",component:WtopwearComponent},
  {path: "subcategory/:prodsubcategory", component: ProdlistComponent },
  {path: "prod/:prodid", component: ProddescriptionComponent },
  {path:"cart/:prodid",component:CartComponent},
  {path:"editprofile",component:EditprofileComponent},
  {path:"**", component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
