## BK - Simple Job Application

This the backend that powers Simple Job Applicaiton (BK Coding exercise).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Local Setup

A step by step series of examples that tell you how to get the development environment running

Clone the repo from github and install dependencies through npm.

```
git clone -------
cd save-auth-api
npm install
```

### Available commands

- create the db: `npx sequelize db:create`
- run pending migration: `npm run db:migrate`
- run all seeders: `npx sequelize db:seed:all`
- start the development sever: `npm run dev`
- Before runing the test,seed all data: `npx sequelize db:seed:all` && `npm run test`

### Technologies

- NodeJS / Express
- Postgres / Sequelize
- Jest / Supertest
