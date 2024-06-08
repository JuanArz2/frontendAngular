import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  userName: String = "";
  ngOnInit(){
    const token: any = localStorage.getItem("token");
    //console.log("Token: ", token);
    const decoded = jwtHelperService.decodeToken(token);
    //console.log("Decoded: ", decoded.name);
    this.userName = decoded.name;
  };
}
