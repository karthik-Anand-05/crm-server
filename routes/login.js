import express from 'express';
const router = express.Router();
import { signUpAuth, signInAuth } from '../controllers/login.js';

router.post('/signin', signInAuth);
router.post('/signup', signUpAuth);

export default router;
