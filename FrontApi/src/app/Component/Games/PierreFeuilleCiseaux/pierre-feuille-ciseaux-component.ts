import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ɵPlayer } from '@angular/core';
import { PierreFeuilleCiseauxRegles } from 'src/app/Models/pierre-feuille-ciseaux-regles.model';
import { Player } from 'src/app/Models/player.model';
import { SignalRService } from 'src/app/Services/signal-r.service';

@Component({
  selector: 'api-pierre-feuille-ciseaux-component',
  templateUrl: `pierre-feuille-ciseaux.component.html`,
  styles: []
})
export class PierreFeuilleCiseauxComponent implements OnInit {
  url: string;
  headers: Headers;
  rules: PierreFeuilleCiseauxRegles[];
  player: Player;
  gameReady: boolean;
  scoreReady: boolean;
  enemy: Player;

  loadingPlayers = false;

  constructor(private http: HttpClient, public signalRService: SignalRService) {
    this.url = 'https://localhost:44362/pierrefeuilleciseau';
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.player = new Player();
  }

  ngOnInit(): void {
    this.signalRService.startConnection();
    this.signalRService.notifyReadyPlayers(this.getReadyPlayers, this);
    this.signalRService.notifyResultatPlayers(this);

    this.http.get<PierreFeuilleCiseauxRegles[]>(`${this.url}/getrules`).subscribe(data => {
      this.rules = data;
    });
  }

  connectServeur(): void {
    this.http.get<Player>(`${this.url}/connectnewplayer`).toPromise().then(newPlayer => {
      this.player = newPlayer;
    });
  }

  getReadyPlayers(instanceGame: PierreFeuilleCiseauxComponent): void {
    instanceGame.gameReady = true;
  }

  choosePierre(): void {
    this.sendPostServer('pierre');
  }

  chooseFeuille(): void {
    this.sendPostServer('feuille');
  }

  chooseCiseaux(): void {
    this.sendPostServer('ciseaux');
  }

  sendPostServer(coup: string): void {
    var request = {
      id: this.player.id,
      coup: coup
    };

    this.loadingPlayers = true;
    this.http.post<Player>(`${this.url}/game`, request).toPromise().then();
  }
}
