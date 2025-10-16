import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ add this


@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
products = [
  { name: 'Concrete Blocks', image: 'assets/block.jpg' },
  { name: 'Roof Tiles', image: 'assets/tile.jpg' },
  { name: 'Steel Rods', image: 'assets/steel.jpg' },
  { name: 'Bricks', image: 'assets/brick.jpg' }
];

}
