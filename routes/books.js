import express from 'express';
import {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  getBookById
} from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/:id', getBookById);

export default router;
