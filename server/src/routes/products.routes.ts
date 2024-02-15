import { Router } from "express";
import { Product } from "../service/products.service";

const router = Router();
const product = new Product();

router.get("/", product.getProducts);

export default router;
