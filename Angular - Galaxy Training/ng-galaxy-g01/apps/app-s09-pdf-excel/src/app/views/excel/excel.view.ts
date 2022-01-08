import { Component, OnInit } from '@angular/core';
import { ExcelGeneratorService } from '../../services/excel-generator.service';

@Component({
  templateUrl: './excel.view.html',
  styleUrls: ['./excel.view.css']
})
export class ExcelView implements OnInit {

  constructor(public excelGenerator: ExcelGeneratorService) { }

  ngOnInit(): void {
  }

}
