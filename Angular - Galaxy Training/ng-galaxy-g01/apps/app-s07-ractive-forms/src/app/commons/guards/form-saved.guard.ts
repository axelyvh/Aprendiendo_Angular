import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OnLeaveView } from '../interfaces/on-leave-view.interface';

@Injectable({
  providedIn: 'root'
})
export class FormSavedGuard implements CanDeactivate<OnLeaveView> {
  canDeactivate(
    component: OnLeaveView,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.onLeaveView();
  }
}
