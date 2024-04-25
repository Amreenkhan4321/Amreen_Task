import Router from 'express'
import { adminRegister } from '../controller/AdminController.js';

const adminRoutes = Router()

adminRoutes.post("/register", adminRegister);


export { adminRoutes };