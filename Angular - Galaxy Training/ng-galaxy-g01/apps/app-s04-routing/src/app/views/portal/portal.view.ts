import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.view.html',
  styleUrls: ['./portal.view.css']
})
export class PortalView implements OnInit {
  categories = [
    { title: 'Desarrollo', slug: 'desarrollo-software' },
    { title: 'Testing', slug: 'testing' },
    { title: 'Base de datos', slug: 'base-datos' }
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  goView(path: string): void {
    this.router.navigateByUrl(path);
    this.router.navigate([path, ]);
  }

  goCategory(slug: string): void {
    this.router.navigate(['/categoria', slug]);
  }
}
