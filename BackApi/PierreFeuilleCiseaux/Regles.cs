using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackApi.PierreFeuilleCiseaux
{
  public class Regle
  {
    public string Data { get; set; }

    public static IEnumerable<Regle> GetPierreFeuilleCiseauRegles()
    {
      yield return new Regle() 
      { 
        Data = "---------- Règles sur Pierre-Feuille-Ciseaux ----------" 
      };

      yield return new Regle()
      {
        Data = "La pierre écrase les ciseaux et gagne."
      };

      yield return new Regle()
      {
        Data = "La feuille enveloppe la pierre et gagne."
      };

      yield return new Regle()
      {
        Data = "Les ciseaux découpent la feuille et gagnent."
      };

      yield return new Regle()
      {
        Data = "Appuyez sur le bouton pour vous connecter"
      };
    }
  }
}
