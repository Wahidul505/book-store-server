import express from 'express';
import { ReadingStatusController } from './readingStatus.controller';

const router = express.Router();

router.patch('/', ReadingStatusController.addBook);
router.get('/', ReadingStatusController.getBook);

export const ReadingStatusRoutes = router;
