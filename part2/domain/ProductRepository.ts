import { Product } from "./Product";

export interface ProductRepository {
  addProduct: (name: string, price: number, quantity: number) => void;
  removeProduct: (id: number) => void;
  getAllProducts: () => Product[];
  getProduct: (id: number) => Product | undefined;
  modifyNameProduct: (id: number, newName: string) => void;
  modifyPriceProduct: (id: number, newPrice: number) => void;
  modifyQuantityProduct: (id: number, newQuantity: number) => void;
}