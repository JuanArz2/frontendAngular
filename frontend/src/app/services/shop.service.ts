import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor() {}  
  httpClient = inject(HttpClient);

  API_URL = "http://18.118.115.16:3000/shop"; // BACKEND AWS URL a donde se harán las peticiones (de crear producto)
  
  /* API_URL = "http://localhost:3000/shop"; // URL a donde se harán las peticiones (de crear producto) */

  createProject(
    facility: any,
    height: any,
    width: any,
    depth: any,
    redesign: any,
    budget: any,
    date: any,
    image: File
  ) {
    const formData = new FormData();
    formData.append("facility", facility)
    /* formData.append("size", size) */
    formData.append("height", height)
    formData.append("width", width)
    formData.append("depth", depth)
    formData.append("redesign", redesign)
    formData.append("budget", budget)
    formData.append("date", date)
    formData.append("image", image)
    return this.httpClient.post(this.API_URL, formData);
  }
  getProjects() {
    return this.httpClient.get(this.API_URL);
  }
  
  getProject(id: string) {
    return this.httpClient.get(this.API_URL + "/" + id);
  }
  
  putProject(id: string) {
    /* return this.httpClient.put(this.API_URL + "/" + id); */
  }
  
  deleteProject(id: string) {
    return this.httpClient.delete(this.API_URL + "/" + id);
  }
}
