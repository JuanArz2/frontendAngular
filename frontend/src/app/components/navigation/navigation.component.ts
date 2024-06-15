import { Component, Inject, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  loginService = inject(LoginService);
  toastrService = inject(ToastrService);

mustLogin() {
  this.toastrService.warning("Por favor inicia seción");
}  

}