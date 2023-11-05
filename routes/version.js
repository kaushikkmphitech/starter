import express from 'express';
import { getVersions } from '../controllers/VersionController.js';
import { upload } from '../middlewares/multer.js';

const routes = express.Router();

routes.get('/', upload.none(), getVersions);

export default routes;