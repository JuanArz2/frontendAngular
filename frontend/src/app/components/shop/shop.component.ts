// import { Token } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms"; // HAY QUE ACTIVARLO
// import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../../services/login.service";
import { ShopService } from "../../services/shop.service";


// const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule], // Activado :D
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  toastrService = inject(ToastrService);
  loginService = inject(LoginService);
  shopService = inject(ShopService);

  userName: string = "usuario sin credenciales";

  name: string = "";
  height: number = 0;
  weight: number = 0;
  inStock: boolean = false;
  image: File | null = null;

  products: any[] = [];

  inputFile(event: any) {
    /* console.log("Event: ", event) */
    if (event.target.files && event.target.files[0]) {
      this.image = event.target.files[0];
      console.log(this.image);
    }
  };

  createProductSubmit(){
    /* console.log("...createProductSubmit...")
    console.log(this.name)
    console.log(this.height)
    console.log(this.weight)
    console.log(this.inStock)
    console.log(this.image) */
    if (this.image /* COMPARA EL RESTO */) {
      this.shopService.createProduct(
        this.name,
        this.height,
        this.weight,
        this.inStock,
        this.image
      ).subscribe((res: any) => {
        if (res.state === "Success") {
          this.toastrService.success(res.state)
        } else {
          this.toastrService.error("Error al crear producto")
        }
      });
    } else {
      this.toastrService.warning("Campos vacíos")
    }
  };
  
  ngOnInit() {
    const token: any = localStorage.getItem("token");
    //console.log("Token: ", token);
    if (token) {
    this.loginService.validateToken(token).subscribe((res: any) => {
      console.log("Response: ", res);
      if (res.state === "Successful") {
        this.userName = res.data.name;
        this.toastrService.success(`Hola, ${this.userName}!`);
        this.shopService.getProducts().subscribe((res: any) => {
          if (res.state === "Success") {
            this.products = res.data;
          } else {
            this.toastrService.error("Error al crear producto")
          }
        })
      } else {
        console.log("It's an invalid token");
        this.loginService.logout();
      }
    });
  } else {
    console.log("There's no token");
    this.loginService.logout();
    }
  }

  handleMoreInfo() {}

  handleEdit() {}

  handleDelete(id: string) {
    this.shopService.deleteProduct(id).subscribe((res: any) => {
      if (res.state === "Success") {
        this.toastrService.success("EXCENTE")
      } else {
        this.toastrService.error("ERROR")
      }
    })
  }

}

/* const decoded = jwtHelperService.decodeToken(token);
    //console.log("Decoded: ", decoded.name);
    this.userName = decoded.name; */
