using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackApi.PierreFeuilleCiseaux
{
  public class Player
  {
    public int Id { get; set; }

    public string Coup { get; set; }

    public int Score { get; set; }

    public int Win { get; set; }

    public TypeCoup TypeCoup => this.Coup.ToTypeCoup();
  }
}
