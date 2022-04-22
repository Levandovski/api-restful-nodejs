import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({ mensagem: "Hello Dev!" });
});

export default routes;
