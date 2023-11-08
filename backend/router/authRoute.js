import express from 'express';
import { AdminLog, AdminSign, Login, Signup } from '../controller/authController.js';

const router = express.Router();

router.post('/signup',Signup);
router.post('/login',Login);
router.post("/adminSign", AdminSign);
router.post("/adminLog", AdminLog);

export default router;