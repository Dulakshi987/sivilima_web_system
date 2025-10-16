import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews {
reviews = [
  { name: 'Kasun Perera', comment: 'Professional and reliable service!' },
  { name: 'Nadeesha Fernando', comment: 'They finished our project ahead of time!' }
];

}
