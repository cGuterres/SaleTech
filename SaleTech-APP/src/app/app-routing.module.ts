import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AuthGuard } from './auth/auth.guard';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';


const routes: Routes = [
  { path: 'user', component: UserComponent,
   children: [
   { path: 'login', component: LoginComponent }
  ]
 },
  { path: 'customer', component: CustomerListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: '**', redirectTo: 'customer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
