import { v4 as uuidv4 } from 'uuid';
import { readJSON, writeJSON } from '../utils/fileHandler.js';

const BOOKS_FILE = './data/books.json';

export const getAllBooks = async (req, res) => {
  const books = await readJSON(BOOKS_FILE);

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedBooks = books.slice(start, end);

  res.json({
    total: books.length,
    page,
    limit,
    books: paginatedBooks,
  });
};


export const addBook = async (req, res) => {
  const { title, author, genre, publishedYear } = req.body;
  const newBook = {
    id: uuidv4(),
    title,
    author,
    genre,
    publishedYear,
    userId: req.user.id,
  };

  const books = await readJSON(BOOKS_FILE);
  books.push(newBook);
  await writeJSON(BOOKS_FILE, books);
  res.status(201).json(newBook);
};

export const updateBook = async (req, res) => {
  const books = await readJSON(BOOKS_FILE);
  const index = books.findIndex((b) => b.id === req.params.id);

  if (index === -1)
    return res.status(404).json({ message: 'Book not found' });
  if (books[index].userId !== req.user.id)
    return res.status(403).json({ message: 'Forbidden' });

  books[index] = { ...books[index], ...req.body };
  await writeJSON(BOOKS_FILE, books);
  res.json(books[index]);
};

export const deleteBook = async (req, res) => {
  const books = await readJSON(BOOKS_FILE);
  const index = books.findIndex((b) => b.id === req.params.id);

  if (index === -1)
    return res.status(404).json({ message: 'Book not found' });
  if (books[index].userId !== req.user.id)
    return res.status(403).json({ message: 'Forbidden' });

  books.splice(index, 1);
  await writeJSON(BOOKS_FILE, books);
  res.json({ message: 'Deleted successfully' });
};


export const getBookById = async (req, res) => {
  const books = await readJSON(BOOKS_FILE);
  const book = books.find((b) => b.id === req.params.id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.json(book);
};


export const searchBooksByGenre = async (req, res) => {

  const { genre } = req.query;
  const books = await readJSON(BOOKS_FILE);

  if (!genre) {
    return res.status(400).json({ message: 'Genre query parameter is required' });
  }

  const filteredBooks = books.filter((book) =>
    book.genre.toLowerCase() === genre.toLowerCase()
  );

  res.json(filteredBooks);
};
