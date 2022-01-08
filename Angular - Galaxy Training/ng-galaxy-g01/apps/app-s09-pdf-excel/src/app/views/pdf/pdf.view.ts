import { Component, OnInit } from '@angular/core';
import { PdfGeneratorService } from '../../services/pdf-generator.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.view.html',
  styleUrls: ['./pdf.view.css']
})
export class PdfView implements OnInit {
  blob: Blob;

  constructor(
    public pdfGenerator: PdfGeneratorService
  ) { }

  ngOnInit(): void {
    const pdf = this.pdfGenerator.generateResume();
    pdf.getBlob(blob => {
      this.blob = blob;
    });
  }

}
