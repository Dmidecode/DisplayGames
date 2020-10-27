import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { GamesComponent } from '../Component/Games/games.component';
import { PierreFeuilleCiseauxComponent } from '../Component/Games/PierreFeuilleCiseaux/pierre-feuille-ciseaux-component';

const gamesRoute: Route = { path: '', component: GamesComponent };
const pierreFeuilleCiseauxRoute: Route = { path: 'pfc', component: PierreFeuilleCiseauxComponent };
// const ticTacToeComponentRoute: Route = { path: 'tictactoe', component: TicTacToeComponent };

const routes: Routes = [
    gamesRoute,
    pierreFeuilleCiseauxRoute,
    // ticTacToeComponentRoute
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingModule { }