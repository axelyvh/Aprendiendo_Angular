import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading: boolean;

  constructor(private router: Router) {
    this.watchRouteEvents();
  }

  watchRouteEvents(): void {
    this.router.events
      .pipe(
        filter(
          (e) =>
            e instanceof NavigationStart ||
            e instanceof NavigationEnd ||
            e instanceof NavigationCancel ||
            e instanceof NavigationError
        ),
        map((e) => e instanceof NavigationStart)
      )
      .subscribe((isLoading) => (this.isLoading = isLoading));
  }
}
