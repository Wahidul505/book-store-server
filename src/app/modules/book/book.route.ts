import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.get('/', BookController.getAllBooks);
router.get('/latest-books', BookController.getLatestBooks);

export const BookRoutes = router;
