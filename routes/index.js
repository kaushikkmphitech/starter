import express from 'express';
import authRoutes from './auth.js';
import verifyKey from '../middlewares/verifyKey.js';
import versionRoutes from './version.js';
import keyRoutes from './key.js';
import userRoutes from './user.js';

const routes = express.Router();

routes.use('/auth', verifyKey, authRoutes);
routes.use('/versions', verifyKey, versionRoutes);
routes.use('/key', keyRoutes);
routes.use('/user', verifyKey, userRoutes);

export default routes;