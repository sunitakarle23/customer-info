import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerDetailRoutingModule } from './customer-details-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


@NgModule({
  declarations: [CustomerDetailsComponent],
  imports: [
    CommonModule,
    CustomerDetailRoutingModule,
    NgbModule
  ]
})
export class CustomerDetailsModule { }
