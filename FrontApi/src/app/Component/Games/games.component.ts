import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/Models/game.model';

@Component({
  selector: 'api-games',
  templateUrl: `games.component.html`,
  styles: []
})
export class GamesComponent implements OnInit {
  public games: Game[];

  ngOnInit(): void {
    this.games = [
      {nom: 'Pierre Feuille Ciseaux', description: 'Le célèbre jeu du shifumi', nbJoueurs: 2, route: 'pfc'},
      { nom: 'Tic Tac Toe', description: 'Le morpion mais le propre pas le sale', nbJoueurs: 2, route: 'tictactoe'}];
  }
}
