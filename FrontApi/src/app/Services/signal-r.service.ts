import { Injectable } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import * as signalR from "@aspnet/signalr";
import { PierreFeuilleCiseauxComponent } from '../Component/Games/PierreFeuilleCiseaux/pierre-feuille-ciseaux-component';
import { Player } from '../Models/player.model';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private hubConnection: signalR.HubConnection;
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:44362/game')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  notifyReadyPlayers(callback: (instanceGame: PierreFeuilleCiseauxComponent) => void, instanceGame: PierreFeuilleCiseauxComponent): void {
    this.hubConnection.on('readyPlayer', () => {
      callback(instanceGame);
    });
  }

  notifyResultatPlayers(instanceGame: PierreFeuilleCiseauxComponent): void {
    this.hubConnection.on('sendScore', (players: Player[]) => {
      players.forEach(player => {
        if (instanceGame.player.id == player.id)
          instanceGame.player = player;
        else
          instanceGame.enemy = player;
      });

      instanceGame.scoreReady = true;
      instanceGame.loadingPlayers = false;
    });
  }
}
