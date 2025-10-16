import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  images = [
    { url: 'assets/slide1.jpg', caption: 'Building the Future, Restoring the Past.' },
    { url: 'assets/slide2.jpg', caption: 'Quality Construction You Can Trust.' },
    { url: 'assets/slide3.jpg', caption: 'Engineering Excellence in Every Project.' }
  ];
  currentSlide = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    }, 3000);
  }
}
