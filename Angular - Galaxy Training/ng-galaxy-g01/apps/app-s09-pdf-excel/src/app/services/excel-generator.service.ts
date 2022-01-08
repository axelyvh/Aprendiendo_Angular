import { Injectable } from '@angular/core';

import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
import { imageBase64 } from '../constants/image.constant';

@Injectable({
  providedIn: 'root'
})
export class ExcelGeneratorService {

  constructor() { }

  generateResume(): void {
    const excel = new Workbook();
    const ws = excel.addWorksheet('Datos del Candidato');
    const ws2 = excel.addWorksheet('Habilidades');

    const avatar = excel.addImage({
      extension: 'png',
      base64: imageBase64,
    });

    /*
    ws.addRow(['Nombre del Candidato']);
    ws.addRow(['Dirección:', 'Mz J Lt 100']);
    ws.addRow(['Contacto']);
    ws.addRow(['Repositorio']);
    */

    ws.columns = [
      { width: 20 },
      { width: 35 },
    ];

    ws.addRows([
      ['Nombre del Candidato'],
      ['Dirección:', 'Mz J Lt 100'],
      ['Contacto:', '9999999999'],
      ['Repositorio', 'https://github.com'],
    ]);

    ws.mergeCells('A1:B1');
    const wsA1 = ws.getCell('A1');
    wsA1.font = { bold: true, size: 20 };

    ws.addImage(avatar, 'C1:C4');

    ws.eachRow(row => {
      row.eachCell(cell => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
    });


    ws2.columns = [
      { width: 35 },
    ];

    ws2.addRows([
      ['Habilidades'],
      ['Habilidad 1'],
      ['Habilidad 2'],
      ['Habilidad 3'],
      ['Habilidad 4'],
      ['Habilidad 5'],
      ['Habilidad 6'],
    ]);

    const ws2A1 = ws2.getCell('A1');
    ws2A1.font = { bold: true, size: 20 };

    ws2.eachRow(row => {
      row.eachCell(cell => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
    });

    excel.xlsx.writeBuffer().then(bytes => {
      const blob = new Blob([bytes]);
      saveAs(blob, 'resume.xlsx');
    });
  }
}
