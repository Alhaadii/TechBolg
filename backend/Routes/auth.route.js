import {Router} from "express";
const router = Router();
import { loginController } from "../Controllers/auth.controller.js";

router.get("/login",loginController);

export default router;