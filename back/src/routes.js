import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.send("teste");
});

console.log("deu bom");

export default routes;
