using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication6.Models
{
    public class Anio
    {
        public enum Meses { Enero=1, Febrero, Marzo, Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre };

        public Meses MesAnio { get; set; }
    }
}