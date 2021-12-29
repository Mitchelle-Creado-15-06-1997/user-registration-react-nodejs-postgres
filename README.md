# user-registration-react-nodejs-postgres

# Full-Stack JS Project: Postgres + Express + React + Node

## Folder Structure

```
app/
  config/
  migrations/
  scripts/
  src-client/
  src-server/
  package.json
  README.md
  .env.example
```

## Authentication Endpoints (/auth/*)
This project uses JWT for authentication.


### Installation
* `$ npm run start`: run the production version of the app
* `$ npm run build`: build the production bundle of the FE app (linting is automatically executed), and perform linting of the BE code
* `$ npm run lint`: perform linting of the BE code
* `$ npm run seed`: perform DB initialization/migration and seeding
* `$ npm run dev`: run the development version of the app
* `$ npm run test:client`: run FE tests using Jest
* `$ npm run test:server`: run BE tests using Jest

### Run
* `$ npm run client:dev`: run Webpack dev server for FE development
* `$ npm run server:dev`: run the development version of BE
* `$ npm run server:prod`: alias of `start`
* `$ npm run pg-migrate`: alias of `node-pg-migrate` module
* `$ npm run db:migrate`: run DB migration scripts
* `$ npm run db:seed`: alias of `seed`


### `POST /auth/login`: Authenticate User
This endpoint authenticates a user. An example of the payload (input data) is provided below:
```
body: {
    email   : String,  /* required */
    password: String,  /* required */
}
```
The output returns JWT token and user object:
```
let response = {
    statusCode: 200,
    body: {
        token  : String,
        user   : Object,
    }
}
```

### `POST /auth/register`: Register New User
This endpoint registers a new user. An example of the payload (input data) is provided below:
```
body: {
    email    : String,    /* required */
    firstName: String,    /* required */
    mobileNo : String,    /* required */
    lastName : String,    /* required */
    password : String,    /* required */
}
```
The output is the same as from `POST /auth/login`

### `GET /auth/me`: Get Current User
This endpoint returns the User object associated with the currently authenticated user. No input data is required
The output is provided is an object with the following structure:
```
let response = {
    statusCode: 200,
    body: {
        id       : Number,
        email    : String,
        firstName: String,
        mobileNo : String,
        lastName : String,
        createdAt: Date,
    }
}
```

## API Endpoints (/api/*)

### `POST /api/posts`: Create a New Post
This endpoint creates a new Post with current user as author. An example of the payload (input data) is provided below:
```
body: {
    content: Text,      /* required */
    title  : String     /* required */
}
```
The output echos back the provided data with the system-generated record ID:
```
let response = {
    statusCode: 200,
    body: {
        id     : Number,
        content: Text,
        title  : String,
        user_id: Number,
    }
}
```

### `GET /api/posts`: Get all Posts
This endpoint returns the complete set of available Posts. No input data is required
The output is provided in array with each object having the structure described above:
```
let response = {
    statusCode: 200,
    body: [
            Post1,
            Post2,
            ...
            PostN
        ]
    }
```

### `GET /api/posts/:id`: Get a Post by ID
This endpoint returns an individual Post by ID. The ID is provided as a URI parameter.
The output is the same as from `POST /api/posts`

### `PUT /api/posts/:id`: Update a Post by ID
This endpoint updates an existing Post by ID. The input/output formats are the same as in `POST /api/posts`

### `DELETE /api/posts/:id`: Delete a Post by ID
This endpoint deletes an individual Post by ID. The ID is provided as a URI parameter.


### DB Connection - 
npm run db:migrate up
