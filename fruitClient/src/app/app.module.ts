import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MatInputModule,
         MatButtonModule, 
         MatSelectModule, 
         MatRadioModule, 
         MatCardModule, 
         MatToolbarModule, 
         MatSidenavModule, 
         MatIconModule, 
         MatListModule
          } from '@angular/material';
import { NgMaterialModule } from './ngmaterial.module'
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ProductService } from './services/products.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SignupComponent,
    LoginComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgMaterialModule,
    HttpClientModule
  ],
  providers: [HttpClient, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
