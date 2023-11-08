import express from 'express';
import { AddItems } from '../controller/itemsListControlles.js';

const router = express.Router();

router.post('/addItem',AddItems)

export default router