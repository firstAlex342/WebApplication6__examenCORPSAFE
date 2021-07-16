using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication6.Controllers
{
    public class HomeController : Controller
    {
        public enum MesesAnio { Enero=1,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre}

        // GET: Home
        public ActionResult Index()
        {

            //enlace a enum
            //http://www.tutorialsteacher.com/csharp/csharp-enum
            //http://www.tutorialesprogramacionya.com/csharpya/detalleconcepto.php?codigo=196&inicio=60

            int mes = (int)MesesAnio.Noviembre;

            return View("Index",mes);
        }
    }
}