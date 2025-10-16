import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { About } from './components/about/about';  // ✅ Add this
import { Products } from './components/products/products';
import { Projects } from './components/projects/projects';
import { Reviews } from './components/reviews/reviews';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: About },
  { path: 'products', component: Products },
  { path: 'projects', component: Projects },
  { path: 'reviews', component: Reviews },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
