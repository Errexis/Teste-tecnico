import { appDataSource } from "../database/data-source";
import { Request, Response } from "express";
import { ProductsEntity } from "../database/entity/product"

export class Product {

  public productsRepository = appDataSource.getRepository(ProductsEntity);

  getProducts = async (req: Request, res: Response) => {
    const products = await this.productsRepository.find();
    
        return res.json(products);
  };
}
