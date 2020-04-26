<b><h1> CRUD Node.js Express Postgresql Time Capsule API </h1></b>

__This was created during my time as a student at Code Chrysalis__

## Synopsis
This was my first time trying for a full stack API. 
I'm looking to add more functionality to it over time!



## Version
1.0.0 - Produced basic functionality for CRUD services.

## Setup

```sh
npm install
```

## Run

```sh
npm run dev
```

## Create a Database

```sh
createdb <your database name>
```

## Seeds

```sh
knex migrate:latest 
knex seed:run      
```

## Test

```sh
npm test
```

- knex migrate command will create the Table Columns within your database.
- knex seed will put sample data within your table.

## Entity-Relationship Diagram

![](https://www.lucidchart.com/publicSegments/view/4390245d-6ab3-4e29-8ffe-0951806ff035/image.png)

