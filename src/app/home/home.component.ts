import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../shared/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customers: ICustomer[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  private getCustomers() {
    this.dataService.getCustomers()
      .subscribe((data: ICustomer[]) => this.customers = data);
  }

  private  clearCustomers() {
    this.customers = [];
  }

}
