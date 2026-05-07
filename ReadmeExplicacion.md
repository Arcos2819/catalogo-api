# Como instalar dependencias y correr el proyecto

## Para crear el proyecto se uso 
* nest new catalogo-api

## para la instalacion de dependecias se uso

* npm install
* npm i

* npm i @nestjs/serve-static
* npm i @nestjs/config
* dependecias de mongo 
    * npm install @nestjs/mongoose mongoose

* Instalar class-validator y class-transformer
    * npm install class-validator class-transformer

##  Como correr el proyecto
    * npm run start:dev

## Levantar mongo
    * docker-compose up -d  
    * docker ps

## Para las carpetas categorias y productos

* Generar la carpeta sin los archivos spec
    * nest g res categorias --no-spec
    * nest g res productos --no-spec

## Que Variables de entorno se necesitan

* MONGO_URI = mongodb://localhost:27017/catalogoDB 

## Como importar y usar las coleciones de Postman o Bruno

* http://localhost:3000/api/productos
 * con post y patch
 {
  "name":"Cargador",
  "precio":1200,
  "stock":1,
  "categoria":"69fbce3613338feae844e889",
  "activo":true
 }

 {
  "name": "cargador",
  "precio": 1200,
  "stock": 1,
  "categoria": "69fbce3613338feae844e889",
  "activo": true,
  "_id": "69fbd36f88aa4b23f9cd888c",
  "createdAt": "2026-05-06T23:49:03.910Z",
  "updatedAt": "2026-05-06T23:49:03.910Z",
  "__v": 0
}

* http://localhost:3000/api/categorias
 * con post y patch
 {
  "name":"Electronicos",
  "descripcion":"Articulos electrinicos" 
 }

 {
  "name": "electronicos",
  "descripcion": "Articulos electrinicos",
  "_id": "69fbce3613338feae844e889",
  "__v": 0
}

