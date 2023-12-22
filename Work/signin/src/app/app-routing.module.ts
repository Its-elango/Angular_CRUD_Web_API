import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { ViewemployeedetailsComponent } from './viewemployeedetails/viewemployeedetails.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'employeedetails', component: ViewemployeedetailsComponent },
      { path: 'addstaff', component: AddemployeeComponent },
      { path: 'updatestaff', component: UpdateemployeeComponent }
    ]
  },
  
{
  path: 'user',
  component: UserLayoutComponent,
  children: [
    { path: 'home', component: UserHomeComponent },
    { path: 'employees', component: ViewemployeeComponent },
  ]
},

  { path: '**', component: NotfoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
