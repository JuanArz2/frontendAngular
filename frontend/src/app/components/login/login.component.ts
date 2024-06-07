import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginCredentials } from "../../interfaces/loginCredentials";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginCredentialsData = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  handleSubmit() {
    if (this.loginCredentialsData.valid) {
      const email = this.loginCredentialsData.value.email;
      const password = this.loginCredentialsData.value.password;

      if (typeof email === "string" && typeof password === "string") {
        const credentialModel: LoginCredentials = {
          email,
          password,
        };
        console.log("crendential ", credentialModel)
      }
    } else {
      console.log("Empty fields");
    }
  }
}
