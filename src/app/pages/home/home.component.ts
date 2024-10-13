import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HomeTableComponent } from "../../components/home-table/home-table.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HomeTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
