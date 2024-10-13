import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  email: string = 'example@mail.com';
  edad = 20;
}
