📚 Bookstore REST API with File-Based Persistence & Authentication

A simple RESTful API built with Node.js and Express, supporting:

✅ User Authentication (JWT, cookie-based)
✅ Book Management with CRUD operations
✅ File-based data persistence using JSON files
✅ Middleware for logging, authentication, and error handling
✅ Bonus Features: Pagination, Genre Search
✅ Tested with Jest & Supertest

🚀 Setup Instructions

Clone the Repository
git clone https://github.com/aryankumar-dev/bookstore/
cd bookstore
Install Dependencies
npm install
Environment Setup
Create a .env file in the root with the following:

PORT=3000
SECRET_KEY=your_secret_here
Start the Server
For production:

npm start
For development with auto-reload (nodemon):

npm run dev
📦 Project Structure

Bookstore/
├── data/              # JSON files for books & users
├── middleware/        # Custom middleware (auth, logger)
├── routes/            # Route handlers
├── utils/             # File handling utilities
├── controllers/       # Logic for books & auth
├── tests/             # Jest test cases
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
🔐 Authentication

Token-based authentication using JWT stored in HTTP-only cookies
Public Endpoints:
POST /auth/register → Register new user
POST /auth/login → Login & receive token
Protected Endpoints:
All /books routes require authentication.
📖 Book Management Endpoints

Method	Endpoint	Description
GET	/books	List all books (paginated)
GET	/books/:id	Get book by ID
POST	/books	Add new book
PUT	/books/:id	Update book (owner only)
DELETE	/books/:id	Delete book (owner only)
GET	/books/search?genre=	Search books by genre
🧪 How to Test with Postman

1. Register User
POST http://localhost:3000/auth/register
Body:

{
  "email": "test@example.com",
  "password": "password123"
}
2. Login
POST http://localhost:3000/auth/login
Body:

{
  "email": "test@example.com",
  "password": "password123"
}
✅ A cookie named token will be set automatically.

3. Book Routes
All /books routes are accessible after login. Send requests with the cookie.

🧑‍🔬 Run Tests

npm test
Requires jest and supertest (already included in package.json).

💡 Notes

Uses plain .json files for persistence — no database needed.
In production, set secure: true for cookies and use HTTPS.
Keep your .env secret — never push .env to GitHub.
🌟 Bonus Features Implemented

✅ Genre-based search
✅ Pagination with page and limit query params
✅ UUIDs for book IDs
✅ Test cases with Jest & Supertest

