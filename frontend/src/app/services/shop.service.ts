import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor() {}  
  httpClient = inject(HttpClient);

  API_URL = "http://localhost:2998/products"; // URL a donde se harán las peticiones (de crear producto)

  createProduct(
    name: any,
    /* size: any, */
    height: any,
    weight: any,
    inStock: any,
    image: File
  ) {
    const formData = new FormData();
    formData.append("name", name)
    /* formData.append("size", size) */
    formData.append("height", height)
    formData.append("weight", weight)
    formData.append("inStock", inStock)
    formData.append("image", image)
    return this.httpClient.post(this.API_URL, formData);
  }
  getProducts() {
    return this.httpClient.get(this.API_URL);
  }
  
  getProduct(id: string) {
    return this.httpClient.get(this.API_URL + "/" + id);
  }
  
  putProduct(id: string) {
    /* return this.httpClient.put(this.API_URL + "/" + id); */
  }
  
  deleteProduct(id: string) {
    return this.httpClient.delete(this.API_URL + "/" + id);
  }
}
