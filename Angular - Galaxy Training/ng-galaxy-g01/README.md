
## Comandos de angular cli - Usandos en clase

### Crear proyecto normal (mono aplicación)

`ng new <nombre-proyecto> --strict true|false --routing true|false --style css|sass|scss|less|stylus`

### Crear espacio de trabajo (multi aplicación)

`ng new <nombre-proyecto> --strict true|false --create-application false`

### Generar una libreria (Revisar paths tsconfig.json)

`ng generate library <nombre de la libreria> --prefix <nombre del prefijo>`

`ng g lib <nombre de la libreria> <nombre del prefijo>`

### Generar una aplicacion 

`ng generate application <nombre de la aplicación>  --routing true|false --style css`

`ng g app <nombre de la aplicación>  --routing true|false --style css`

###  Generar un componente

`ng generate componente <nombre del componente>`

`ng g c <nombre del componente>`

`ng g c <ruta del componente>/<nombre del componente>`

`ng g c <ruta del componente>/<nombre del componente> --skip-test`

###  Generar un view

`ng g c <nombre del componente> --type=view --skip-selector`

###  Generar una directiva

`ng generate directive <nombre de la directiva>`
`ng g d <nombre de la directiva>`

###  Generar un pipe

`ng generate pipe <nombre del pipe>`

`ng g p <nombre del pipe>`

`ng g p <ruta del pipe>/<nombre del pipe>`

###  Generar un servicio

`ng generate service <nombre del servicio>`
`ng g s <nombre del servicio>`

###  Generar un module

`ng generate module <nombre del module> --routing true`
`ng g m <nombre del module> --routing true`

###  Generar un interceptor

`ng generate interceptor <nombre del interceptor>`
`ng g interceptor <nombre del interceptor>`

###  Generar un resolver

`ng generate resolver <nombre del resolver>`
`ng g resolver <nombre del resolver>`

###  Generar un resolver

`ng generate guard <nombre del guardian>`

###  Correr proyecto

`ng serve`

`ng serve --project <nombre de la aplicación>`

`ng serve --project <nombre de la aplicación> --port 4201`

###  Correr proyecto y abrir el navegador

`ng serve -o`

###  Contruir la aplicacion

`ng build`
`ng build --project <nombre de la aplicación>`
`ng build --project <nombre de la aplicación> --configuration <nombre del ambiente>`

###  Ejecutar pruebas unitarias

`ng test`
`ng test --project <nombre de la aplicación>`
`ng test --project <nombre de la aplicación> --code-coverage true`


