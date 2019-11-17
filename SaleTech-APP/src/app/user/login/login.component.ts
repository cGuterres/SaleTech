import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/_service/User.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(
      public router: Router
    , private toastr: ToastrService
    , private userService: UserService) { }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.router.navigate(['/customer']);
    }
  }

  login() {
    this.userService.login(this.model)
    .subscribe(
      () => {
        this.router.navigate(['/customer']);
      }, error => {
        this.toastr.error('The email and/or password entered is invalid. Please try again.');
      });
  }
}
