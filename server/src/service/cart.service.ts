import { appDataSource } from "../database/data-source";
import { Request, Response } from "express";
import { Cart } from "../database/entity/cart"

export class CartEntity {

  public cartRepository = appDataSource.getRepository(Cart);

  getCart = async (req: Request, res: Response) => {
    const cart = await this.cartRepository.find();
    
        return res.json(cart);
  };

  deleteCartById = async (req: Request, res: Response) =>{
    const id = Number(req.params.id);

    await this.cartRepository.delete(id);

    return res.json({ message: "Produto deletado com sucesso"})
  }
}
