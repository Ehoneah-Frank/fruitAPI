import { Router } from "express";
import { postFruits, getFruits, getOneFruit, patchFruit, deleteFruit } from "../controllers/fruit_controller.js";

const fruitRouter = Router();

fruitRouter.post("/fruits", postFruits);
fruitRouter.get("/fruits", getFruits);
fruitRouter.get("/fruits/:id", getOneFruit);
fruitRouter.put("/fruits/:id", patchFruit);
fruitRouter.delete("/fruits/:id", deleteFruit);

export default fruitRouter;