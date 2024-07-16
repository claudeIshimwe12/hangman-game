import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { IngameComponent } from './pages/ingame/ingame.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: IngameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
