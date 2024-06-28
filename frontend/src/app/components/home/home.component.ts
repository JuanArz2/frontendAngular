import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms"; // HAY QUE ACTIVARLO
import { DatePipe } from "@angular/common"; // res.xData.xFecha | date : "shortDate"
// import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../../services/login.service";
import { HomeService } from "../../services/home.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  toastrService = inject(ToastrService);
  loginService = inject(LoginService);
  homeService = inject(HomeService);

  userName: string = "usuario sin credenciales";

  /* name: string = "";
  height: number = 0;
  weight: number = 0;
  inStock: boolean = false;
  image: File | null = null; */

  facility: string = "";
  height: number = 0;
  width: number = 0;
  depth: number = 0;
  redesign: boolean = false;
  budget: Number = 0;
  date: Date = new Date();
  image: File | null = null;

  allProjects : any[] = [];
  projects: any[] = [];

  inputFile(event: any) {
    /* console.log("Event: ", event) */
    if (event.target.files && event.target.files[0]) {
      this.image = event.target.files[0];
      console.log(this.image);
    }
  };

  createProjectSubmit(){
    /* console.log("...createProjectSubmit...")
    console.log(this.facility)
    console.log(this.height)
    console.log(this.width)
    console.log(this.depth)
    console.log(this.redesign)
    console.log(this.budget)
    console.log(this.date)
    console.log(this.image) */
    if (this.image /* COMPARA EL RESTO */) {
      this.homeService.createProject(
        this.facility,
        this.height,
        this.width,
        this.depth,
        this.redesign,
        this.budget,
        this.date,
        this.image
      ).subscribe((res: any) => {
        if (res.state === "Success") {
          this.toastrService.success(res.state) /* ARREGLAAAAAAAAAAAAAAAAAAR
          ARREGLAAAAAAAAAAAAAAAAAAR
          ARREGLAAAAAAAAAAAAAAAAAAR
          res.state?
          ARREGLAAAAAAAAAAAAAAAAAAR
          ARREGLAAAAAAAAAAAAAAAAAAR */
        } else {
          this.toastrService.error("Error al crear proyecto")
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
      /* console.log("Response: ", res); */
      if (res.state === "Successful") {
        this.userName = res.data.name;
        this.toastrService.success(`Hola, ${this.userName}!`);
        this.homeService.getProjects().subscribe((res: any) => {
          if (res.state === "Success") {
            this.projects = res.data;
          } else {
            this.toastrService.error("Error al crear proyecto")
          }
        })
      } else {
        console.log("It's an invalid token");
        this.loginService.logout();
      }
    });
  } else {
    /* console.log("There's no token"); */
    this.loginService.logout();
    }
  }

  handleMoreInfo() {}

  handleEdit() {}

  handleDelete(id: string) {
    let confirmation = confirm("¿Desea ELIMINAR los DATOS de la creación definitivamente?");
    if (confirmation) {
      this.homeService.deleteProject(id).subscribe((res: any) => {
        if (res.state === "Success") {
          this.toastrService.info("Datos de la creación ELIMINADOS")
        }
      })
    } else {
      this.toastrService.info("NO se han ELIMINADO los datos")
    }
  }
}
