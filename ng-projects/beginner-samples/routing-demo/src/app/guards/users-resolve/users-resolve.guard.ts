import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveGuard implements Resolve<IUser[]> {
  constructor(private userService:UserService){}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): IUser[] {
    return this.userService.getUsers();
  }

}
