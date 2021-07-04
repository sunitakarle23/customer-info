import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/customer';
import { CustomerService } from '../shared/customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [];

  constructor(
    private _customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this._customerService.getCustomerDetails().subscribe((res: Customer[]) => {
      this.customerList = res;
      console.log("list", this.customerList);
    })

  }

}
