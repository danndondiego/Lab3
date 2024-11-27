import { Product } from "../model/Product";

export class ProductCatalogViewModel {
  private _productList: Product[] = [];
  private _listeners: Function[] = [];

  get productList() {
    return this._productList;
  }

  set productList(newList: Product[]) {
    this._productList = newList;
    this._notifyListeners();
  }

  addListener(listener: Function) {
    this._listeners.push(listener);
  }

  removeListener(listener: Function) {
    this._listeners = this._listeners.filter((l) => l !== listener);
  }

  private _notifyListeners() {
    this._listeners.forEach((listener) => listener(this._productList));
  }

  addProduct(product: Product) {
    this._productList.push(product);
    this._notifyListeners();
  }

  updateQuantity(productId: number, newQuantity: number) {
    const product = this._productList.find((p) => p.id === productId);

    if (product) {
      product.updateQuantity(newQuantity);
      this._notifyListeners();
    }
  }
}