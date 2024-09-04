import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//Import of Routes
import userRoutes from "./routes/User.route.js";
import exploreRoutes from "./routes/Explore.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From the Server");
});

app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App is listning on PORT ${PORT}`);
});
