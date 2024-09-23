## Todo Backend

A simple Todo Backend API built with Node.js, Express, and MongoDB using Mongoose for data modeling.

# Features

- CRUD operations for Todo tasks.
- User authentication using JWT.
- User registration and login with password hashing via bcryptjs.
- Input validation with Joi.
- CORS-enabled to allow cross-origin requests.
- Configurable environment variables with dotenv.

# Prerequisites

- Node.js (version 12.x or later)
- MongoDB Atlas or a local instance of MongoDB

# Getting Started

1.  Clone the Repository

    `Copy code`

    `git clone https://github.com/your-username/todo-backend.git`

    `cd todo-backend`

2.  Install Dependencies

    `npm install`

3.  Set Up Environment Variables - Create a .env file in the root of the project and add the following environment variables:

        PORT=

        MONGO_URI=

        JWT_SECRET=

4.  Run the Application
    For development with automatic restarts (using Nodemon):

        npm run dev

# API Endpoints

## User Routes

Method Endpoint Description

- POST /api/v1/users/login User login
- POST /api/v1/users/register User registration
- GET /api/v1/users/me Get current user profile (requires JWT)

1. POST /api/v1/users/login: User login, returns a JWT token if credentials are correct.
2. POST /api/v1/users/register: User registration, hashes the password and stores user info.
3. GET /api/v1s/users/me: Fetches the currently logged-in user's profile using the provided JWT token.

# Dependencies

- bcryptjs: For hashing and verifying passwords.
- cors: For enabling cross-origin resource sharing.
- dotenv: To manage environment variables.
- express: Fast, unopinionated web framework for Node.js.
- joi: For input validation.
- jsonwebtoken: For generating and verifying JWTs (used in authentication).
- mongoose: For interacting with MongoDB using schemas.
- uuid: To generate unique identifiers.
  Dev Dependencies
- nodemon: For automatically restarting the server during development.

# License

- This project is licensed under the ISC License.
