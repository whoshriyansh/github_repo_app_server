import { Router } from "express";
import { getUserProfileAndRepo } from "../controllers/User.controller.js";

const router = Router();

router.get("/profile/:username", getUserProfileAndRepo);

//todo likes routes
//like a profile

export default router;
