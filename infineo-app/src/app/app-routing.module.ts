import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { IsLoggedGuard } from './helper/is-logged.guard'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'liste', component: ListComponent },
  { path: 'cart', component: CartComponent, canActivate:
    [IsLoggedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
