import axios, { AxiosInstance } from "axios";

class ExtendableError extends Error {
    constructor(message: string) {
        super(`API Error - ${message}`);
        this.name = new.target.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

class UnexpectedError extends ExtendableError {}

interface ProductProps{
    id: number;
    name: string;
    price: number;
    amount: number;
    popularity: number;
    createdAt: Date;
    updatedAt: Date;
}

interface CartProps{
    id: number;
    price: number;
    amount: number;
    products: string;
}

class Api {
    public api: AxiosInstance;
    public token: string | undefined;

    constructor() {
        this.api = axios.create({
            baseURL: process.env.BACKEND_ENDPOINT,
        });
    }

    public async unexpectedError(message: string) {
        throw new UnexpectedError(message);
    }

    public async getProduct(): Promise<[ProductProps]> {

        const res = await this.api.get('/product');

        if (res.status != 200) {
            throw new UnexpectedError('Unexpected status code: ' + res.status);
        }
        
        return res.data;
    }

    public async getCart(): Promise<[CartProps]> {
        const res = await this.api.get('/cart');

        if (res.status != 200) {
            throw new UnexpectedError('Unexpected status code: ' + res.status);
        }
        
        return res.data;
    }
};

export { Api };
export type { ProductProps, CartProps };
export const api = new Api();