import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    {path: '', component: LoginComponent},
    {path: 'home/empleados', component:EmpleadosComponent}
];

