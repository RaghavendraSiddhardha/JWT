

# Node.js Authentication API with JWT

## Description
This project is a simple Node.js API for handling user authentication, using JWT (JSON Web Tokens). It supports user registration, login, and protected routes that require authentication. The API can be used in any application that needs a secure authentication system.

### Features:
- User registration and login with hashed passwords using `bcryptjs`
- Token-based authentication using `jsonwebtoken` (JWT)
- MongoDB for database with `mongoose` to model and connect
- Middleware to protect private routes

## Technologies Used:
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing users
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB
- **bcryptjs**: To hash and compare passwords
- **jsonwebtoken**: To generate and verify JWT tokens
- **dotenv**: For environment variable management

## Prerequisites:
- Node.js installed on your system
- MongoDB installed or access to a MongoDB Atlas instance
- Postman or any API testing tool (optional, for testing the API)

## Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/node-auth-api.git
   cd node-auth-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```bash
   MONGO_URI=mongodb://localhost:27017/your-db-name
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints:

### 1. **Register User:**
   - **URL**: `/api/auth/register`
   - **Method**: `POST`
   - **Description**: Register a new user
   - **Request Body**:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com",
       "password": "password123"
     }
     ```
   - **Response**: 
     ```json
     {
       "message": "User registered successfully"
     }
     ```

### 2. **Login User:**
   - **URL**: `/api/auth/login`
   - **Method**: `POST`
   - **Description**: Authenticate user and get token
   - **Request Body**:
     ```json
     {
       "email": "john@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "token": "jwt_token_here"
     }
     ```

### 3. **Protected Route**:
   - **URL**: `/api/protected`
   - **Method**: `GET`
   - **Description**: Access a protected route with a valid JWT token
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <your_jwt_token>"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "You are authorized"
     }
     ```


## Usage:

1. **Register a user**: Make a POST request to `/api/auth/register` with name, email, and password.
2. **Login**: After registration, use `/api/auth/login` to log in and receive a JWT token.
3. **Access protected routes**: Use the JWT token to access routes that require authentication by including it in the `Authorization` header.

## Dependencies:

- bcryptjs
- dotenv
- express
- jsonwebtoken
- mongoose
- nodemon (dev dependency)

## License:

This project is licensed under the MIT License.

---

This README provides an overview of the project, how to set it up, and how to use its key features. Feel free to modify it based on your specific needs or additional features you plan to implement.
