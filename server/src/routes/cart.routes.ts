import { Router } from "express";
import { Cart } from "../service/cart.service";

const router = Router();
const cart = new Cart();

router.get("/", cart.getCart);

export default router;
