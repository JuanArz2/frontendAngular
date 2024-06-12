import { Token } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { LoginService } from "../../services/login.service";

const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  loginService = inject(LoginService);

  userName: string = "usuario visitante";
  ngOnInit() {
    const token: any = localStorage.getItem("token");
    //console.log("Token: ", token);
    if (token) {
    this.loginService.validateToken(token).subscribe((res: any) => {
      console.log("Response: ", res);
      if (res.state === "Successful") {
        this.userName = res.data.name;
      } else {
        console.log("It's an invalid token");
      }
    });
    } else {
      console.log("There's no token");
    }
  };
}

/* const decoded = jwtHelperService.decodeToken(token);
    //console.log("Decoded: ", decoded.name);
    this.userName = decoded.name; */
