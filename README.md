📚 Bookstore REST API with File-Based Persistence & Authentication

A simple, clean RESTful API built with Node.js and Express, supporting:

✅ Token-based user authentication (JWT stored in cookies)
✅ Full Book Management with CRUD operations
✅ File-based data persistence using JSON files
✅ Custom middleware for logging, authentication, and error handling
✅ Bonus Features: Pagination, Genre Search
✅ Tested with Jest & Supertest

🚀 Setup Instructions

1. Clone the Repository
git clone https://github.com/aryankumar-dev/bookstore.git
cd bookstore
2. Install Dependencies
npm install
3. Environment Setup
Create a .env file in the root directory with:

PORT=3000
SECRET_KEY=your_secret_here
4. Start the Server
For production:

npm start
For development (auto-reload with nodemon):

npm run dev
📦 Project Structure

Bookstore/
├── data/              # JSON files for books & users
├── middleware/        # Custom middleware (auth, logger)
├── routes/            # Route handlers
├── utils/             # File handling utilities
├── controllers/       # Business logic for books & auth
├── tests/             # Jest & Supertest cases
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
🔐 Authentication Overview

Token-based authentication using JWT, stored securely in HTTP-only cookies.

Public Endpoints
POST /auth/register → Register a new user
POST /auth/login → Login and receive a token
Protected Endpoints
All /books routes are protected and require authentication.

📖 Book Management Endpoints

Method	Endpoint	Description
GET	/books	List all books (paginated)
GET	/books/:id	Get book by ID
POST	/books	Add new book
PUT	/books/:id	Update book (owner only)
DELETE	/books/:id	Delete book (owner only)
GET	/books/search?genre=xyz	Search books by genre
🧪 How to Test with Postman or curl

1. Register User
POST http://localhost:3000/auth/register
Body (JSON):

{
  "email": "test@example.com",
  "password": "password123"
}
2. Login
POST http://localhost:3000/auth/login
Body (JSON):

{
  "email": "test@example.com",
  "password": "password123"
}
✅ A cookie named token will be set automatically on successful login.

3. Book Routes
Once logged in, you can access /books routes. The cookie is sent automatically in Postman if you enable it.

Example:

GET http://localhost:3000/books

🧑‍🔬 Run Tests

npm test
Tests are written using Jest & Supertest.

💡 Notes

Uses plain .json files for data persistence — no database required.
In production, set secure: true for cookies and use HTTPS.
Do NOT push your .env file to GitHub — .gitignore already handles this.
🌟 Bonus Features Implemented

✅ Genre-based book search
✅ Pagination with page and limit query params
✅ UUIDs for book IDs
✅ Test cases with Jest & Supertest

✅ Ready to deploy or demonstrate!
