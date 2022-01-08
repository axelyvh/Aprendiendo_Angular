import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../../commons/services/logger.service';

@Component({
  templateUrl: './checkout.view.html',
  styleUrls: ['./checkout.view.css']
})
export class CheckoutView implements OnInit {

  constructor(
    public logger: LoggerService,
  ) { }

  ngOnInit(): void {
  }

}
