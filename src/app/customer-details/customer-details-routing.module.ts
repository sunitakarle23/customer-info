import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details.component';


const routes: Routes = [
  {
    path: '',  component: CustomerDetailsComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDetailRoutingModule {
  constructor() {
    console.log("customer detail module loaded");
  }
 }
