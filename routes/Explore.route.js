import { Router } from "express";
import { getReposWithLanguage } from "../controllers/Explore.controller.js";

const router = Router();

router.use("/repos/:language", getReposWithLanguage);

export default router;
