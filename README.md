# 📚 Bookstore REST API (Node.js + Express)

A simple REST API for a Bookstore with:

✅ JWT-based user authentication (cookie stored)  
✅ Full CRUD for book management  
✅ JSON file persistence (no database needed)  
✅ Middleware for logging, auth & error handling  
✅ Bonus: Genre search, Pagination  

---

## 🚀 Setup

```bash
git clone https://github.com/aryankumar-dev/bookstore.git  
cd bookstore  
npm install  
```

**Create a `.env` file:**

```bash
PORT=3000  
SECRET_KEY=your_secret_here  
```

**Start the server:**

```bash
npm run dev   # Dev mode with nodemon  
npm start     # Production mode  
```

---

## 🔐 Authentication

### Register (Create Account)  
**Endpoint:** `POST /auth/register`  

**JSON Body Example:**  
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

### Login  
**Endpoint:** `POST /auth/login`  

**JSON Body Example:**  
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

✅ On successful login, a token is set in an HTTP-only cookie.  

**All `/books` routes require login.**

---

## 📖 Book Routes

| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| GET    | `/books`                  | List all books (pagination supported) |
| GET    | `/books/:id`              | Get book by ID            |
| POST   | `/books`                  | Add a new book            |
| PUT    | `/books/:id`              | Update book (owner only)  |
| DELETE | `/books/:id`              | Delete book (owner only)  |
| GET    | `/books/search?genre=xyz` | Search by genre           |

**Example JSON to Add Book:**  
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "publishedYear": 1925
}
```
