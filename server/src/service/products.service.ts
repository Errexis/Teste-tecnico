import { appDataSource } from "../database/data-source";
import { Request, Response } from "express";
import { Products } from "../database/entity/product"

export class Product {

  public productsRepository = appDataSource.getRepository(Products);

  getProducts = async (req: Request, res: Response) => {
    const products = await this.productsRepository.find();
        console.log(products);
        return res.json(products);
  };
}
