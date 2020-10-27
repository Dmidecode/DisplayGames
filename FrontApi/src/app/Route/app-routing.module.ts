import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AboutComponent } from '../Component/About/about.component';
import { HomeComponent } from '../Component/Home/home.component';
import { PageErrorComponent } from '../Component/Error/page-error.component';

const accueilRoute: Route = { path: '', component: HomeComponent };
const aboutRoute: Route = { path: 'about', component: AboutComponent };
const gamesRoute: Route = { 
  path: 'games', 
  loadChildren: () => 
  import('../Module/games.module').then(m => m.GamesModule)
 };
const pageErrorRoute: Route = { path: '**', component: PageErrorComponent };

const routes: Routes = [
  accueilRoute,
  gamesRoute,
  aboutRoute,
  pageErrorRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
