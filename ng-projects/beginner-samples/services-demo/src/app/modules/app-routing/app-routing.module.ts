import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { AboutComponent } from 'src/app/components/about/about.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { UserDetailsComponent } from 'src/app/components/user-details/user-details.component';
import { UsersComponent } from 'src/app/components/users/users.component';

const appRoutes:Routes = [
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"users", component:UsersComponent,  children:[
    {path:":userId", component:UserDetailsComponent, pathMatch:"full"}
  ]},
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"**",redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forRoot(appRoutes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
