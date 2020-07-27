import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorInterceptor} from './auth/token-interceptor.interceptor'

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { NgxSpinnerModule } from 'ngx-spinner';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {GalleriaModule} from 'primeng/galleria';
import { FacebookModule } from 'ngx-facebook';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatBadgeModule,
    MatIconModule,
    NgxSpinnerModule,
    CarouselModule,
    ButtonModule,
    GalleriaModule,
    FacebookModule,
    FacebookModule.forRoot(),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
