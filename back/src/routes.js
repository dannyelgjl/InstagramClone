import { Router } from "express";
import multer from "multer";
import uploadsConfig from "./config/upload";

import PostController from "./app/controllers/PostController";
import LikeController from "./app/controllers/LikeController";

const routes = new Router();
const upload = multer(uploadsConfig);

routes.get("/posts", PostController.index);
routes.post("/posts", upload.single("image"), PostController.store);

routes.post("/posts/:id/like", LikeController.store);

export default routes;
