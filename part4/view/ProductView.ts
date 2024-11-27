import { Product } from "../model/Product";
import { ProductCatalogViewModel } from "../viewmodel/ProductCatalogViewModel";

const listener = (products: Product[]) => {
  console.log(products);
};

const product1 = new Product("Pencil", 12);
const product2 = new Product("Mouse", 120);

const list = new ProductCatalogViewModel();

list.addListener(listener);
console.log("Adding first product");
list.addProduct(product1);
console.log("Adding seccong product");
list.addProduct(product2);

list.removeListener(listener);