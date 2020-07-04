import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { CartComponent } from './components/cart/cart.component';
// import { CheckoutComponent} from './components/checkout/checkout.component'
import { from } from 'rxjs';
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signin',           component: SigninComponent},
    { path: 'signup',           component: SignupComponent},
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'product',          component: ProductComponent  },
    { path: 'productdetail/:id',    component: ProductdetailComponent },
    { path: 'contact',          component: ContactComponent},
    { path: 'cart',             component: CartComponent},
    // { path: 'checkout',         component: CheckoutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
