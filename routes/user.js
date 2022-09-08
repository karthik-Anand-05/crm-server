import express from 'express';
const router = express.Router();
import { signUpAuth, signInAuth, tokenAuth } from '../controllers/auth.js';


router.post('/signin', signInAuth);
router.post('/signup', signUpAuth);
router.post('/token', tokenAuth);


export default router;