import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})

export class Projects {
projects = [
  { image: 'assets/site1.jpg', client: 'ABC Pvt Ltd', type: 'Residential', duration: '6 months', date: '2024-08-12' },
  { image: 'assets/site2.jpg', client: 'XYZ Constructions', type: 'Commercial', duration: '1 year', date: '2024-05-20' }
];

}
