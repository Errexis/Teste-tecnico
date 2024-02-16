import * as dotenv from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { ProductsEntity } from "./entity/product"
import { CartEntity } from "./entity/cart"

dotenv.config();

export const appDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [ ProductsEntity, CartEntity ],
    migrations: [],
    subscribers: [],
});