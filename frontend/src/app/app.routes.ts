import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ShopComponent } from "./components/shop/shop.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
    {path: "home", title: "Inicio", component: HomeComponent},
    {path: "login", title: "Iniciar Sesión", component: LoginComponent},
    {path: "shop", title: "Tienda", component: ShopComponent},
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "**", title: "404 | Página no Encontrada", component: PageNotFoundComponent},
];
