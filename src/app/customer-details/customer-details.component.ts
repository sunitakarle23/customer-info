import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../shared/customer';
import { CustomerService } from '../shared/customer.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  custId: number;
  customerDetails: Customer[] = [];
  customers = [];
  selectedItemIndex: number;

  constructor(
    private _customerService: CustomerService,
    private _route: ActivatedRoute,
    config: NgbCarouselConfig
  ) {
    config.animation = false;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this._route.params.subscribe((param) => {
      this.custId = parseInt(param.id);
      console.log("query params", param);
    });

    this._customerService.getCustomerDetails().subscribe((res: Customer[]) => {
      this.customerDetails = res;
    });

  }

}
