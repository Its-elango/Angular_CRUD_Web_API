import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { ViewemployeedetailsComponent } from './viewemployeedetails/viewemployeedetails.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeHeaderComponent } from './layouts/home-header/home-header.component';
import { UserHeaderComponent } from './layouts/user-header/user-header.component';
import { AdminHeaderComponent } from './layouts/admin-header/admin-header.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [  
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent, 
    SigninComponent, 
    FooterComponent,
    NotfoundComponent,
    ViewemployeeComponent,
    ViewemployeedetailsComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    HomeLayoutComponent,
    HomeHeaderComponent,
    UserHomeComponent,
    AdminHomeComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    UserHeaderComponent,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
