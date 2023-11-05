import expres from 'express';
import { changePassword, updateProfile } from '../controllers/UserController.js';
import { changePasswordRequest, updateProfileRequest } from '../requests/user.js';
import verifyToken from '../middlewares/verifyToken.js';
import validationHandler from '../utils/validationHandler.js';
import { upload } from '../middlewares/multer.js';

const routes = expres.Router();

routes.post('/changePassword', verifyToken, upload.none(), validationHandler(changePasswordRequest), changePassword);
routes.post('/updateProfile', verifyToken, upload.single('avatar'), validationHandler(updateProfileRequest), updateProfile);

export default routes;