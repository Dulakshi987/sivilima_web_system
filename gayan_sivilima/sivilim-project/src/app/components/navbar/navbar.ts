import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ add this


@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
showContact = false;

}
