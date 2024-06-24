import { Routes } from '@angular/router'; // Para poder crear rutas
import { activateGuard } from "./guards/activate.guard"; // Para denegar acceso sin credenciales
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/products/products.component";
import { ShopComponent } from "./components/shop/shop.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
    {path: "aboutUs", title: "Willi Bastiadas", component: AboutUsComponent},
    {path: "home", title: "Wooden Craft", component: HomeComponent},
    {path: "login", title: "Iniciar Sesión", component: LoginComponent},
    {path: "products", title: "Creaciones", component: ProductsComponent},
    {path: "shop", title: "Hazlo en Casa", component: ShopComponent, canActivate:[activateGuard]},
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "**", title: "404 | Página no Encontrada", component: PageNotFoundComponent},
];
