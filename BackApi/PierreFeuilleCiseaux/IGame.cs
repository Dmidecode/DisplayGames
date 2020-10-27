using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackApi.PierreFeuilleCiseaux
{
  public interface IGame
  {
    Player RecordPlayer();

    void RecordMove(Player request);

    List<Player> GetPlayers();

    Player EnemyPlayer(int idPlayer);

    void ResetPlayers();

    void Compute();
  }
}
