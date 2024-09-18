import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import path from "path";

import "./passport/Github.auth.js";

import userRoutes from "./routes/User.route.js";
import exploreRoutes from "./routes/Explore.route.js";
import authRoutes from "./routes/Auth.route.js";

import connectMongoDB from "./db/ConnectDB.js";

dotenv.config();

const app = express();

const getCorsOptions = () => {
  const isProduction = process.env.NODE_ENV === "production";
  return {
    origin: isProduction ? "http://3.109.2.38:3000" : "http://localhost:3000",
    credentials: true,
  };
};
app.use(cors(getCorsOptions()));

const PORT = 4000;
const __dirname = path.resolve();

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
  connectMongoDB();
});
