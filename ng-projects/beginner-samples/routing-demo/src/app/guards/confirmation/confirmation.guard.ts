import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate{
  confirm():boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component:CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.confirm();
  }

}
