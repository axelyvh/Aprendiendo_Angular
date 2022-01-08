import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate, CanLoad {

  constructor(
    private session: SessionService,
    private router: Router
  ) {
    // semejansas
    // this.router.navigate(['/asdasd', 1]); => this.router.createUrlTree(['/asdasd', 1]);

    // this.router.navigateByUrl(''); => this.router.parseUrl('');
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.session.isAuth || this.router.parseUrl('/ingresar');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.session.isAuth || this.router.parseUrl('/ingresar');
  }
}
