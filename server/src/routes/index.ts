import { Application, Request, Response } from "express";
import { logger } from "../middleware/logger";
import { response } from "../utils/response";
import exampleRoutes from "./example";
import productsRoutes from "./products.routes"

export default (app: Application) => {
  app.all("/", async (req: Request, res: Response) => {
    response(res, 200, "OK");
  });

  app.use("/example", exampleRoutes);
  app.use("/product", productsRoutes);
};
