## BK - Simple Job Application

This the backend that powers Simple Job Applicaiton (BK Coding exercise).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Local Setup

A step by step series of examples that tell you how to get the development environment running

Clone the repo from github and install dependencies through npm.

```
git clone https://github.com/abayo-luc/simple-job-applicaiton-api.git
cd save-auth-api
npm install
```

Check `.env.sample` to add environoment vairables.

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

### Available end points

#### Add application:

`POST /applicants`

required params are: firstName, lastName, email, phoneNumber,cv (link)

```source-json
{
    "data": {
        "id": 4,
        "email": "jean.bayo@gmail.com",
        "firstName": "Jean Luc",
        "lastName": "Abayo",
        "phoneNumber": "0789277279",
        "cv": "some url",
        "status": "pending"
        "comment": "HLLO comment",
        "updatedAt": "2020-10-02T13:24:39.624Z",
        "createdAt": "2020-10-02T13:24:39.624Z",
    }
}
```

#### List applicants:

`GET /applicants`

```source-json
{
   "data": {
    "count": 2,
    "rows": [
      {
        "id": 4,
        "firstName": "Jean Luc",
        "lastName": "Abayo",
        "email": "jean.bayo@gmail.com",
        "phoneNumber": "0789277279",
        "cv": "some url",
        "comment": "HLLO comment",
        "status": "pending",
        "createdAt": "2020-10-02T13:24:39.624Z",
        "updatedAt": "2020-10-02T13:24:39.624Z"
      },
      {
        "id": 1,
        "firstName": "Jean Luc",
        "lastName": "Abayo",
        "email": "jean.abayo@gmail.com",
        "phoneNumber": "0789277275",
        "cv": "some url",
        "comment": "HLLO comment",
        "status": "pending",
        "createdAt": "2020-10-02T13:20:46.063Z",
        "updatedAt": "2020-10-02T13:20:46.063Z"
      }
    ]
  }
}
```

#### View applicant:

`GET /applicants/:id`

```source-json
{
    "data": {
        "id": 4,
        "email": "jean.bayo@gmail.com",
        "firstName": "Jean Luc",
        "lastName": "Abayo",
        "phoneNumber": "0789277279",
        "cv": "some url",
        "status": "pending"
        "comment": "HLLO comment",
        "updatedAt": "2020-10-02T13:24:39.624Z",
        "createdAt": "2020-10-02T13:24:39.624Z",
    }
}
```

#### Update status:

`PUT /applicants/:id`

required: status one of ['pending', 'invited', 'passed', 'failed']

```source-json
{
    "data": {
        "id": 4,
        "email": "jean.bayo@gmail.com",
        "firstName": "Jean Luc",
        "lastName": "Abayo",
        "phoneNumber": "0789277279",
        "cv": "some url",
        "status": "passed"
        "comment": "HLLO comment",
        "updatedAt": "2020-10-02T13:24:39.624Z",
        "createdAt": "2020-10-02T13:24:39.624Z",
    }
}
```
