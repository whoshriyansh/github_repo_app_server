import express from "express";

import { ensureAuthenticated } from "../middleware/Ensure.middleware.js";
import { explorePopularRepos } from "../controllers/Explore.controller.js";

const router = express.Router();

router.get("/repos/:language", ensureAuthenticated, explorePopularRepos);

export default router;
