import { NgModule } from "@angular/core";

import { RouterModule } from '@angular/router';
import { GamesComponent } from '../Component/Games/games.component';
import { GamesRoutingModule } from '../Route/games-routing.module';
import { SharedModule } from './shared.module';
import { PierreFeuilleCiseauxComponent } from '../Component/Games/PierreFeuilleCiseaux/pierre-feuille-ciseaux-component';

@NgModule({
    declarations: [GamesComponent, PierreFeuilleCiseauxComponent],//, PierreFeuilleCiseauxComponent, TicTacToeComponent],
    imports: [
        RouterModule,
        GamesRoutingModule,
        SharedModule
    ], exports: [PierreFeuilleCiseauxComponent]
})
export class GamesModule { }