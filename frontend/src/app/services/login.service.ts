import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LoginCredentials } from "../interfaces/loginCredentials";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  httpClient = inject(HttpClient);
  router = inject(Router);
  toastrService = inject(ToastrService);

  URL_API = "http://localhost:2998/login";

  login(userCredentials: LoginCredentials){
    return this.httpClient.post(this.URL_API, userCredentials);
  }

  validateToken(token: string) {
    return this.httpClient.get(`${this.URL_API}/${token}`);
  }

  isLoged() {
    if (localStorage.getItem("token")) {
      console.log("Is loged")
      return true;
    } else {
      console.log("Isn't loged")
      return false;
    }
  }

  logout(){
    this.toastrService.info("Sesión cerrada");
    localStorage.removeItem("token");
    this.router.navigate(["/"]); //Redirigir Way_2
  }
}
