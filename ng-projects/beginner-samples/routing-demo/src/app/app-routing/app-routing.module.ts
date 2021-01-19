import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { BlogComponent } from '../components/blog/blog.component';
import { HomeComponent } from '../components/home/home.component';
import { MessageListComponent } from '../components/message-list/message-list.component';
import { PlaceHolderComponent } from '../components/place-holder/place-holder.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { UsersComponent } from '../components/users/users.component';
import { AuthGuard } from '../guards/auth/auth.guard';
import { ConfirmationGuard } from '../guards/confirmation/confirmation.guard';
import { UsersResolveGuard } from '../guards/users-resolve/users-resolve.guard';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"blog", component:BlogComponent, canActivate:[AuthGuard]},
  {path:"users",component:UsersComponent, pathMatch:"prefix",
    canActivateChild:[AuthGuard],
    resolve:{users:UsersResolveGuard},
  children:[
    {path:":userId", component:UserDetailsComponent},
    // {path:"", component:PlaceHolderComponent}
  ]},
  {path:"messages", component:MessageListComponent, canDeactivate:[ConfirmationGuard]},
  {path:"**", redirectTo:"/home", pathMatch:"full"}
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers:[AuthGuard, ConfirmationGuard,UsersResolveGuard]
})
export class AppRoutingModule { }
