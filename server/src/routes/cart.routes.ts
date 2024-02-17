import { Router } from "express";
import { CartEntity } from "../service/cart.service";

const router = Router();
const cart = new CartEntity();

router.get("/", cart.getCart);

export default router;
