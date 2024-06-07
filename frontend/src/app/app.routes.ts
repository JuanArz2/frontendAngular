import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { FurnitureComponent } from "./components/furniture/furniture.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
    {path: "home", title: "Home", component: HomeComponent},
    {path: "login", title: "Iniciar Sesión", component: LoginComponent},
    {path: "shop", title: "Mobiliario", component: FurnitureComponent},
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "**", title: "404 | Página no Encontrada", component: PageNotFoundComponent},
];
