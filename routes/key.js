import express from 'express';
import { getKey } from '../controllers/KeyController.js';
import { upload } from '../middlewares/multer.js';

const routes = express.Router();

routes.get('/', upload.none(), getKey);

export default routes;