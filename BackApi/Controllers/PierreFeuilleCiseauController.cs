using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackApi.PierreFeuilleCiseaux;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace BackApi.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class PierreFeuilleCiseauController : ControllerBase
  {
    public IGame GameManager { get; set; }
    private IHubContext<GameHub> _hub;

    public PierreFeuilleCiseauController(IGame gameManager, IHubContext<GameHub> hub)
    {
      this.GameManager = gameManager;
      this._hub = hub;
    }

    [HttpGet("[action]")]
    public IEnumerable<Regle> GetRules()
    {
      return Regle.GetPierreFeuilleCiseauRegles();
    }

    [HttpGet("[action]")]
    public Player ConnectNewPlayer()
    {
      Player newPlayer = this.GameManager.RecordPlayer();
      if (this.GameManager.GetPlayers().Count >= 2)
      {
        this._hub.Clients.All.SendAsync("readyPlayer");
        this.GameManager.ResetPlayers();
      }

      return newPlayer;
    }

    [HttpPost("[action]")]
    public object Game(Player player)
    {
      // Manager de jeu
      this.GameManager.RecordMove(player);

      // On attend que le deuxième joueur effectue son coup
      if (this.GameManager.GetPlayers().Count <= 1)
        return null;

      // Traitement
      this.GameManager.Compute();

      this._hub.Clients.All.SendAsync("sendScore", this.GameManager.GetPlayers());

      this.GameManager.ResetPlayers();

      return null;
    }
  }
}
