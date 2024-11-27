import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class ProductService {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  addProduct(name: string, price: number, quantity: number) {
    this.repository.addProduct(name, price, quantity);
  }

  removeProduct(id: number) {
    this.repository.removeProduct(id);
  }

  getProduct(id: number): Product | undefined {
    return this.repository.getProduct(id);
  }

  getAllProducts(): Product[] {
    return this.repository.getAllProducts();
  }

  modifyNameProduct(id: number, newName: string) {}

  modifyPriceProduct(id: number, newPrice: number) {}

  modifyQuantityProduct(id: number, newQuantity: number) {}
}