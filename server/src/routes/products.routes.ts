import { Router } from "express";
import { ProductEntity } from "../service/products.service";

const router = Router();
const product = new ProductEntity();

router.get("/", product.getProducts);

export default router;
