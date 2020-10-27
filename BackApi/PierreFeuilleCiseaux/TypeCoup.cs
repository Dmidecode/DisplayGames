using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackApi.PierreFeuilleCiseaux
{
  public enum TypeCoup
  {
    Pierre = 0,
    Feuille = 1,
    Ciseaux = 2
  }

  public static class StringExtension
  {
    public static TypeCoup ToTypeCoup(this string coup)
    {
      if (string.IsNullOrEmpty(coup))
        return TypeCoup.Pierre;

      switch (coup.ToLower())
      {
        case "pierre":
        case "p":
        default:
          return TypeCoup.Pierre;
        case "feuille":
        case "f":
          return TypeCoup.Feuille;
        case "ciseaux":
        case "c":
          return TypeCoup.Ciseaux;
      }
    }
  }
}
