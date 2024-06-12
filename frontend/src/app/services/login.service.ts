import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginCredentials } from "../interfaces/loginCredentials";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  httpClient = inject(HttpClient);

  URL_API = "http://localhost:2998/login";

  login(userCredentials: LoginCredentials){
    return this.httpClient.post(this.URL_API, userCredentials);
  }

  validateToken(token: string) {
    return this.httpClient.get(`${this.URL_API}/${token}`);
  }
}
