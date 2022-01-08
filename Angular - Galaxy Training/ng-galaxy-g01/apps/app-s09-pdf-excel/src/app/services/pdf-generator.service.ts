import { Injectable } from '@angular/core';

import pdfMake, { TCreatedPdf } from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { imageBase64 } from '../constants/image.constant';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  constructor() {}

  generateResume(): TCreatedPdf {
    return pdfMake.createPdf({
      content: [
        { text: 'Curriculum Vitae', style: 'title' },
        {
          columns: [
            {
              stack: [
                { text: 'Nombre del Candidato', style: 'name' },
                'Dirección',
                'Contacto',
                { text: 'Repositorio', link: 'https://github.com', style: 'link' },
              ]
            },
            {
              image: imageBase64,
              alignment: 'right',
              fit: [100, 100],
            }
          ]
        },
        { text: 'Habilidades', style: 'subtitle' },
        {
          columns: [
            {
              stack: [
                {
                  ul: [
                    'Habilidad 1',
                    'Habilidad 2',
                  ]
                }
              ]
            },
            {
              stack: [
                {
                  ul: [
                    'Habilidad 3',
                    'Habilidad 4',
                  ]
                }
              ]
            },
            {
              stack: [
                {
                  ul: [
                    'Habilidad 5',
                    'Habilidad 6',
                  ]
                }
              ]
            },
          ]
        },
        { text: 'Experiencia', style: 'subtitle' },
        {
          table: {
            body: [
              [
                {
                  columns: [
                    {
                      stack: [
                        { text: 'Puesto', style: 'job' },
                        'Nombre de la Empresa',
                        'Descripción del puesto',
                      ]
                    },
                    { text: 'Experiencia: 12 meses', alignment: 'right' }
                  ]
                },
              ],
              [
                {
                  columns: [
                    {
                      stack: [
                        { text: 'Puesto', style: 'job' },
                        'Nombre de la Empresa',
                        'Descripción del puesto',
                      ]
                    },
                    { text: 'Experiencia: 12 meses', alignment: 'right' }
                  ]
                },
              ],
              [
                {
                  columns: [
                    {
                      stack: [
                        { text: 'Puesto', style: 'job' },
                        'Nombre de la Empresa',
                        'Descripción del puesto',
                      ]
                    },
                    { text: 'Experiencia: 12 meses', alignment: 'right' }
                  ]
                },
              ]
            ],
            widths: '*'
          }
        },
        { text: 'Educación', style: 'subtitle' },
        {
          table: {
            body: [
              ['Titulo', 'Institución', 'Graduación', 'Promedio'],
              ['Magister', 'Nombre de Univerdad', '2021', '100'],
              ['Ingeniero', 'Nombre de Universidad', '2019', '100'],
            ],
            widths: '*'
          }
        },
        { text: 'Otros detalles', style: 'subtitle' },
        'Otors detalles agregados por el usuario ...',
        {
          columns: [
            { qr: 'https://google.com.pe', fit: 100, margin: [0, 20, 0, 0] },
            {
              stack: [
                'Firma',
                'Nombre del Candidato'
              ],
              alignment: 'right',
              margin: [0, 40, 0, 0]
            }
          ]
        }
      ],
      styles: {
        title: { alignment: 'center', bold: true, fontSize: 20, margin: [0, 0, 0, 20] },
        name: { bold: true, fontSize: 16 },
        link: { color: 'blue', bold: true, decoration: 'underline' },
        subtitle: { decoration: 'underline', bold: true, fontSize: 18, margin: [0, 20] },
        job: { bold: true, italics: true, fontSize: 15 }
      },
    });
  }
}
