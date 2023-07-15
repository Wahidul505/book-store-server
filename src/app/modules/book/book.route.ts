import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.get('/:id', BookController.getSingleBook);
router.get('/', BookController.getAllBooks);
router.get('/latest-books', BookController.getLatestBooks);
router.post('/add-book', BookController.addNewBook);

export const BookRoutes = router;
