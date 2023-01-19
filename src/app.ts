import express from "express";
import morgan from "morgan";
import cors from "cors";

import recipesRoutes from "./routes/recipes.routes";
import ingredientsRoutes from "./routes/ingredients.routes";

const app = express();
const router = express.Router();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router, recipesRoutes, ingredientsRoutes);

app.get("/health", (req, res) => {
  res.send("THE API IS UP");
});

export default app;
