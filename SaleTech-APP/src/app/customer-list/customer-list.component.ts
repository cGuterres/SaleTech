import { Component, OnInit } from '@angular/core';
import { Customer } from '../_models/Customer';
import { CustomerService } from '../_service/Customer.service';
import { ToastrService } from 'ngx-toastr';
import { UserSys } from '../_models/UserSys';
import { UserService } from '../_service/User.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  listCustomers: Customer[];
  gridFiltered: Customer[];
  currentUser: UserSys;

  constructor(
    private customerService: CustomerService
  , private toastr: ToastrService
  , private userService: UserService
    ) {
      this.currentUser = this.userService.currentUserValue;
    }

  _filterGrid: string;
  get filterGrid(): string {
    return this._filterGrid;
  }

  set filterGrid(value: string) {
    this._filterGrid = value;
    this.gridFiltered = this._filterGrid.length > 0 ? this.searchCustomerByFilter(this._filterGrid) : this.listCustomers;
  }

  ngOnInit() {
    //usuário logado como admin - permissão total
    console.log(this.currentUser.userRole.isAdmin);
    if (this.currentUser.userRole.isAdmin) {
      this.searchAllCustomers();
    } else {
      //usuário comum
      this.searchCustomerByUserId(this.currentUser.id);
    }
  }

  searchCustomerByUserId(userId: number) {
    this.customerService.SearchCustomerByUserId(userId).subscribe(
    // tslint:disable-next-line: variable-name
    (_return: Customer[]) => {
      this.listCustomers = _return;
      this.gridFiltered = this.listCustomers;
    }
  , error => {
    console.log(error);
    this.toastr.error(`Erro ao tentar carregar clientes: ${error}`);
  });
}

  searchAllCustomers() {
    this.customerService.searchAllCustomer().subscribe(
    // tslint:disable-next-line: variable-name
    (_return: Customer[]) => {
        this.listCustomers = _return;
        this.gridFiltered = this.listCustomers;
        console.log(_return);
    }
  , error => {
    console.log(error);
    this.toastr.error(`Erro ao tentar carregar clientes: ${error}`);
  });
}

searchCustomerByFilter(filtered: string): Customer [] {
  if (filtered.length > 0) {
    filtered = filtered.toLowerCase();
    return this.listCustomers.filter(
      customer => customer.name.toLowerCase().indexOf(filtered) !== -1
      );
    }
  }

  isAdmin() {
    return this.currentUser.userRole.isAdmin;
  }
}
