import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdlistComponent } from './prodlist/prodlist.component';
import { ProddescriptionComponent } from './proddescription/proddescription.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ ProdlistComponent, ProddescriptionComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    ProdlistComponent,
    ProddescriptionComponent
  ]
})
export class ProductModule { }
