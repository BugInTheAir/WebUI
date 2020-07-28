import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CartServiceService } from 'app/service/cart-service.service';
import { Cart } from 'app/models/cart';
import { DelegateServiceService } from 'app/service/delegate-service.service';
import { User } from 'app/models/user';
import { UserServiceService } from 'app/service/user-service.service';
import { AuthService } from 'app/service/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    total: number;
    cart = new Cart();
    itemCount: number;
    user = new User();
    constructor(public location: Location, private element: ElementRef, public cartSvc: CartServiceService, private delegate: DelegateServiceService, public userSvc: UserServiceService, public authSvc: AuthService) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.updateCartCountUI();
        this.delegate.changeReserve(this);
    }
    updateCartCountUI() {
        this.cartSvc.get(this);
        this.itemCount = this.cart.item.map((x) => x.Quants).reduce((p , n) => p + n, 0);
    }
    getUser() {
        if(this.authSvc.getToken() !== null){
            this.userSvc.getUser(this);
        }
        return this.user.UserName;
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
