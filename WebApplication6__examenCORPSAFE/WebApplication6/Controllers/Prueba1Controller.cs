using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication6.Models;

namespace WebApplication6.Controllers
{
    public class Prueba1Controller : Controller
    {
        
        // GET: Prueba1
        public ActionResult Index()
        {
           Anio miAnio = new Anio();
           return View("PersonasForm",miAnio);
        }


        public ActionResult ProcesarBoton1(string Nombre, int Edad, bool EstadoCivil, int MesAnio,string Genero)
        {
            Persona persona = new Persona(Nombre, Edad, EstadoCivil, MesAnio, Genero);
            return View("ProcesarBoton1", persona);
        }


        public JsonResult CrearObjeto(string Nombre, int Edad, bool EstadoCivil, int MesAnio, string Genero)
        {
            Persona p = new Persona(Nombre, Edad, EstadoCivil, MesAnio, Genero);
            return Json(p, JsonRequestBehavior.AllowGet);
        }


        public JsonResult CrearNuevamenteObjeto(Persona per)
        {
            return Json(per, JsonRequestBehavior.AllowGet);
        }
    }
}