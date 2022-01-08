import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './category.view.html',
  styleUrls: ['./category.view.css']
})
export class CategoryView implements OnInit, OnDestroy {

  categoryName: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    // Captura los parametros 1 sola vez
    // const categoryName = this.activatedRoute.snapshot.paramMap.get('categoryName');
    // console.log(categoryName);

    // Captura los parametros cada vez que cambian
    this.activatedRoute.paramMap
    .subscribe(
      paramMap => this.categoryName = paramMap.get('categoryName')
    );

    console.log('[CategoryView] ngOnInit');
  }

  ngOnDestroy() {
    console.log('[CategoryView] ngOnDestroy');
  }

}
