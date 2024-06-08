import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginCredentials } from "../interfaces/loginCredentials";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  httpClient = inject(HttpClient);

  login(userCredentials: LoginCredentials){
    return this.httpClient.post("http://localhost:2998/login", userCredentials)
  }
}
