import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms'

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { CardProductComponent } from './card-product/card-product.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import { CardNewProductComponent } from './card-new-product/card-new-product.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgxPayPalModule } from 'ngx-paypal';
import {GalleriaModule} from 'primeng/galleria';
import {DataViewModule} from 'primeng/dataview';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {FieldsetModule} from 'primeng/fieldset';
import {InplaceModule} from 'primeng/inplace';
import {TabViewModule} from 'primeng/tabview';
import { FacebookModule } from 'ngx-facebook';
import {CarouselModule} from 'primeng/carousel';
import {TableModule} from 'primeng/table';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardProductRelateComponent } from './card-product-relate/card-product-relate.component';
import {MatMenuModule} from '@angular/material/menu';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { BlogComponent } from './blog/blog.component';
import {BlockUIModule} from 'primeng/blockui';
import { WriteBlogComponent } from './write-blog/write-blog.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        MatTabsModule,
        MatSliderModule,
        MatButtonModule,
        MatInputModule,
        MatBadgeModule,
        MatIconModule,
        MatSnackBarModule,
        MatStepperModule,
        ReactiveFormsModule,
        NgxPayPalModule,
        GalleriaModule,
        DataViewModule,
        FieldsetModule,
        InplaceModule,
        TabViewModule,
        FacebookModule,
        FacebookModule.forRoot(),
        CarouselModule,
        TableModule,
        NgxSpinnerModule,
        MatMenuModule,
        BlockUIModule,
        CKEditorModule,
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        CardProductComponent,
        ProductComponent,
        ContactComponent,
        ProductdetailComponent,
        CardNewProductComponent,
        CartComponent,
        CartItemComponent,
        SigninComponent,
        SignupComponent,
        UserprofileComponent,
        CardProductRelateComponent,
        ScrollToTopComponent,
        BlogComponent,
        WriteBlogComponent,
    ],
    entryComponents: [NgbdModalContent],
    exports: [ ComponentsComponent ]
})
export class ComponentsModule { }
