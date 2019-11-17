import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_service/User.service';
import { UserSys } from '../_models/UserSys';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentUser: UserSys;
  constructor(
     public userService: UserService
   , private router: Router ) { }

  ngOnInit() {
  }

  loggedIn() {
    // se nao está logado esconde o menu
    this.currentUser = this.userService.currentUserValue;
    return this.userService.loggedIn();
  }

  login() {
    this.router.navigate(['/user/login']);
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/user/login']);
  }
}
