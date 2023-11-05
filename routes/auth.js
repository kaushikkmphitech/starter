import express from 'express';
import { login, register, verifyEmail, logout, forgotPassword, resetPassword, profile } from '../controllers/AuthController.js';
import { loginRequest, registerRequest, verifyEmailRequest, forgotPasswordRequest, resetPasswordRequest } from '../requests/auth.js';
import verifyToken from '../middlewares/verifyToken.js';
import validationHandler from '../utils/validationHandler.js';
import { upload } from '../middlewares/multer.js';

const routes = express.Router();

routes.post('/login', upload.none(), validationHandler(loginRequest), login);
routes.post('/register', upload.single('avatar'), validationHandler(registerRequest), register);
routes.post('/verifyEmail', upload.none(), validationHandler(verifyEmailRequest), verifyEmail);
routes.post('/logout', verifyToken, upload.none(), logout);
routes.post('/forgotPassword', upload.none(), validationHandler(forgotPasswordRequest), forgotPassword);
routes.post('/resetPassword', upload.none(), validationHandler(resetPasswordRequest), resetPassword);
routes.get('/profile', verifyToken, upload.none(), profile);

export default routes;