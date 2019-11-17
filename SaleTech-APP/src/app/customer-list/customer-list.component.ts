import { Component, OnInit } from '@angular/core';
import { Customer } from '../_models/Customer';
import { CustomerService } from '../_service/Customer.service';
import { ToastrService } from 'ngx-toastr';
import { UserSys } from '../_models/UserSys';
import { UserService } from '../_service/User.service';
import { Gender } from '../_models/Gender';
import { GenderService } from '../_service/Gender.service';
import { City } from '../_models/City';
import { CityService } from '../_service/City.service';
import { Region } from '../_models/Region';
import { RegionService } from '../_service/Region.service';
import { Classification } from '../_models/Classification';
import { ClassificationService } from '../_service/Classification.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  listCustomers: Customer[];
  gridFiltered: Customer[];
  currentUser: UserSys;

  listGenders: Gender[];
  listCities: City[];
  listRegions: Region[];
  listClassifications: Classification[];
  listSellers: UserSys[] = [];

  constructor(
    private customerService: CustomerService
  , private toastr: ToastrService
  , private userService: UserService
  , private genderService: GenderService
  , private cityService: CityService
  , private regionService: RegionService
  , private classificationService: ClassificationService
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
    // carrega os generos do BD
    this.getAllGenders();
    // carrega as cidades
    this.getAllCities();
    // carrega as regiões do BD
    this.getAllRegions();
    // carrega as classificações do BD
    this.getAllClassifications();
    // carrega os vendedores do BD
    this.getAllSellers();
    // usuário logado como admin - permissão total
    if (this.currentUser.userRole.isAdmin) {
      this.searchAllCustomers();
    } else {
      // usuário comum
      this.searchCustomerByUserId(this.currentUser.id);
    }
  }

  searchCustomerByUserId(userId: number) {
    this.customerService.searchCustomerByUserId(userId).subscribe(
    // tslint:disable-next-line: variable-name
    (_return: Customer[]) => {
      this.listCustomers = _return;
      this.gridFiltered = this.listCustomers;
    }
  , error => {
    this.toastr.error(`Erro ao tentar carregar clientes: ${error}`);
  });
}

  searchAllCustomers() {
    this.customerService.searchAllCustomer().subscribe(
    // tslint:disable-next-line: variable-name
    (_return: Customer[]) => {
        this.listCustomers = _return;
        this.gridFiltered = this.listCustomers;
    }
  , error => {
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

  getAllGenders() {
    this.genderService.searchAllGenders().subscribe(
      (list: Gender[]) => {
          this.listGenders = list;
      }
    , error => {
      this.toastr.error(`Error trying to load genders: ${error}`);
    });
  }

  getAllCities() {
    this.cityService.searchAllCities().subscribe(
      (list: City[]) => {
          this.listCities = list;
      }
    , error => {
      this.toastr.error(`Error trying to load cities: ${error}`);
    });
  }

  getAllRegions() {
    this.regionService.searchAllRegions().subscribe(
      (list: Region[]) => {
          this.listRegions = list;
      }
    , error => {
      this.toastr.error(`Error trying to load regions: ${error}`);
    });
  }

  getAllClassifications() {
    this.classificationService.searchAllClassification().subscribe(
      (list: Classification[]) => {
          this.listClassifications = list;
      }
    , error => {
      this.toastr.error(`Error trying to load classifications: ${error}`);
    });
  }

  getAllSellers() {
    this.userService.searchAllSellers().subscribe(
      (list: UserSys[]) => {
        this.listSellers = list;
      }
    , error => {
      this.toastr.error(`Error trying to load sellers: ${error}`);
    });
  }
}
