import express from "express";
import {
  getLikes,
  getUserProfileAndRepos,
  likeProfile,
} from "../controllers/User.controller.js";
import { ensureAuthenticated } from "../middleware/Ensure.middleware.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
router.get("/likes", ensureAuthenticated, getLikes);
router.post("/like/:username", ensureAuthenticated, likeProfile);

export default router;
