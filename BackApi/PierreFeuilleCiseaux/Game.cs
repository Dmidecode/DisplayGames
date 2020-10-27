using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackApi.PierreFeuilleCiseaux
{
  public class Game : IGame
  {
    public List<Player> Players { get; set; }
    public Dictionary<int, int> Scores { get; set; }
    public const int NbPlayers = 2;

    int[,] Matrice = new int[3, 3];
    const int Win = 1;
    const int Draw = 0;
    const int Lose = -1;

    public Game()
    {
      this.Players = new List<Player>();
      this.Scores = new Dictionary<int, int>();

      int pierre = (int)TypeCoup.Pierre;
      int feuille = (int)TypeCoup.Feuille;
      int ciseaux = (int)TypeCoup.Ciseaux;

      Matrice[pierre, pierre] = Draw;
      Matrice[pierre, feuille] = Lose;
      Matrice[pierre, ciseaux] = Win;

      Matrice[feuille, pierre] = Win;
      Matrice[feuille, feuille] = Draw;
      Matrice[feuille, ciseaux] = Lose;

      Matrice[ciseaux, pierre] = Lose;
      Matrice[ciseaux, feuille] = Win;
      Matrice[ciseaux, ciseaux] = Draw;
    }

    public void Compute()
    {
      Player player1 = this.Players.First();
      Player player2 = this.Players.Last();
      int resultat1 = this.Matrice[(int)player1.TypeCoup, (int)player2.TypeCoup];
      int resultat2 = this.Matrice[(int)player2.TypeCoup, (int)player1.TypeCoup];
      this.Scores[player1.Id] += Math.Max(0, resultat1);
      this.Scores[player2.Id] += Math.Max(0, resultat2);

      player1.Win = resultat1;
      player1.Score = this.Scores[player1.Id];

      player2.Win = -resultat1;
      player2.Score = this.Scores[player2.Id];
    }

    public List<Player> GetPlayers()
    {
      return this.Players;
    }

    public void RecordMove(Player request)
    {
      this.Players.Add(request);

      if (!this.Scores.ContainsKey(request.Id))
        this.Scores.Add(request.Id, 0);
    }

    public Player EnemyPlayer(int idPlayer)
    {
      return this.Players.FirstOrDefault(x => x.Id != idPlayer);
    }

    public Player RecordPlayer()
    {
      Player newPlayer = new Player();
      if (this.Players.Count > 1)
        newPlayer = this.Players.LastOrDefault();
      else
      {
        newPlayer.Id = this.Players.Count + 1;
        this.Players.Add(newPlayer);
        //this.Players.Add(new Player() { Id = this.Players.Count + 1});
      }

      return newPlayer;
    }

    public void ResetPlayers()
    {
      this.Players.Clear();
    }
  }
}
