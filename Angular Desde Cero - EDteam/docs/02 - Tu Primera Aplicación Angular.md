# Tu Primera Aplicación Angular

## Angular CLI

Interfaz de línea de Comandos (Command Line Interface) para angular.

### ¿Qué es Angular CLI?

* Scaffold

    Genera una estructura inicial de archivos, directorios, configuraciones, etc. Para un proyecto angular.

* Preview

    Es una vista previa del proyecto.

* Local Build

    Optimiza el proyecto con los scripts necesarios, para despues deplegar el proyecto.

* Local testing, Unit tests, E2E tests

    Sirve para probar las funciones de nuestros clases, componentes, servicios, integración, etc.

* Follow Best Practices

    Se conoce y sigue las buenas practicas de angular.

### Creando una Aplicación

``` javascript

// Instalando Angular CLI
npm install -g @angular/cli 

// Creando un proyecto angular
ng new app-axel-angular

// Creando un proyecto angular con personalización
ng new app-axel-angular --routing --prefix ax --style css --skip-install

// --routing -> Genera un modulo para el manejo de rutas.

// --prefix <prefijo> -> Se define un prefijo para usar en los componentes, directivas, servicios, etc. que se van creando durante el proyecto.

// --style <css> ->  Se define el tipo de archivo para los estilos.

// --skip-install -> Permite generar la estructura del proyecto sin instalar las dependencias.

```

## Vista previa de la App

``` javascript

ng serve -o

// -o -> es un parametro opcional que sirve para ejecutar el navegador despues de la compilación.

```

## Testeando la aplicación

### Unit Testing

``` javascript

ng test

```

### E2E Testing

``` javascript

ng e2e

```

### Linting

``` javascript

ng lint

```

## Herramientas para generar un proyecto desde cero

### Angular Console

[Angular Console](https://angularconsole.com)

### StackBlitz

[StackBlitz](https://stackblitz.com)

## Generación de código en Angular CLI

``` javascript

//Generar una clase
ng generate class <nombre> [opciones]

//Generar interfaces
ng generate interface <nombre> [opciones]

//Generar Enumerados
ng generate enum <nombre> [opciones]

//Generar Componentes
ng generate component <nombre> [opciones]

//Generar Módulos
ng generate module <nombre> [opciones]

//Generar Servicios
ng generate service <nombre> [opciones]

//Generar directivas
ng generate directive <nombre> [opciones]

//Generar Pipes
ng generate pipe <nombre> [opciones]

//Otros
appShell

application

guard

library

serviceWorker

universal

webWorker

``` 
[Más generadores](https://angular.io/cli/generate)

## Estructura de un proyecto angular

* .editorconfig

    Configuración para editores de codigo [htttp://editorconfig.org](htttp://editorconfig.org)

* .gitignore 

    Especifica los archivos que no se versionan

* README.md

    Documentación de la App principal

* angular.json

    Configuraciones por defecto para Angular CLI, incluyendo opciones de configuración para build, serve, test, etc.

* src/ 

    Código fuente para la aplicación principal (root-level)

* node_modules/

    Provee los paquetes NPM para todo el espacio de trabajo

* tsconfig.json

    Configuración para TypeScript

* tslint.json

    Configuración para TSLint

## Archivos de la aplicación

* app/

    Contiene los archivos de componentes

* assets/

    Contiene imágenes y otros archivos.

* environments/

    Contiene opciones de configuración para entornos objetivo

* favicon.ico

    El ícono que se usará con la aplicación

* index.html

    El principal archivo HTML, el cual se sirve cuando se visita el sitio.

* main.ts

    El principal punto de entrada para la aplicación

* polyfills.ts

    Provee polyfill scripts para el soporte de navegadores

* styles.sass 

    Provee estilos para el proyecto. La extension del archivo refleja el pre-procesador configurado para el mismo.

* test.ts

    El principal punto de entrada para los unit tests.

## Desplegando localmente el build de tu aplicación

### Generación del build 

``` javascript

ng build

```

### Generación del build de producción

``` javascript

ng build --prod

```

## Http-Server

Servidor de linea de comandos

``` javascript

//Instalando
npm install -g http-server

//Desplegando el build
http-server dist/<NombrePoyecto>

```