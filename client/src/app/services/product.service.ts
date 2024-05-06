import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import Product from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiURL = 'http://localhost:8002';
  httpClient = inject(HttpClient);

  constructor() {}

  getProducts() {
    return this.httpClient.get<Product[]>(this.apiURL + '/products');
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(this.apiURL + '/products/' + id);
  }

  addProduct(model: Product) {
    return this.httpClient.post(this.apiURL + '/products/create', model);
  }

  updateProduct(id: string, model: Product) {
    return this.httpClient.patch(this.apiURL + '/products/update/' + id, model);
  }

  deleteProduct(id: string) {
    return this.httpClient.delete(this.apiURL + '/products/delete/' + id);
  }
}
