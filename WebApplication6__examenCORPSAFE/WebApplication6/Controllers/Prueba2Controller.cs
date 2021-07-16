using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication6.Models;
using System.Web.Script.Serialization;

namespace WebApplication6.Controllers
{
    public class Prueba2Controller : Controller
    {
        // GET: Prueba2
        public ActionResult Index()
        {
            List<Producto> listaProductosVacia = new List<Producto>();

            return View("ProductoIndex", listaProductosVacia);
        }

        public ActionResult MostrarTodosProductos()
        {
            CreadorDeListaProducto creadorLista = new CreadorDeListaProducto();
            List<Producto> listaProductos = creadorLista.CrearListaProducto();

            return View("ProductoIndex",listaProductos);
        }

        //Accceder a filas de tabla html
         //http://notasweb.com/articulo/javascript/acceder-a-las-celdas-de-una-tabla.html
         
        public JsonResult ProcesarProductosActivos()
        {
            CreadorDeListaProducto creador = new CreadorDeListaProducto();
            List<Producto> listaProducto = creador.CrearListaProducto();

            Func<Producto, bool> delegado = item => {
                if (item.Descontinuado == false)
                { return true; }

                else { return false; }
            };

            List<Producto> listaRespuesta = listaProducto.Where(delegado).ToList<Producto>();

            return Json(listaRespuesta, JsonRequestBehavior.AllowGet);
        }


        public JsonResult ProcesarProductosInactivos()
        {
            CreadorDeListaProducto creador = new CreadorDeListaProducto();
            List<Producto> listaProducto = creador.CrearListaProducto();

            Func<Producto, bool> delegado = item =>
            {
                if (item.Descontinuado == true)
                { return true; }

                else { return false; }
            };

            List<Producto> listaRespuesta = listaProducto.Where(delegado).ToList<Producto>();

            return Json(listaRespuesta, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ProcesarTodosProductos()
        {
            CreadorDeListaProducto creador = new CreadorDeListaProducto();
            List<Producto> listaProducto = creador.CrearListaProducto();

            Func<Producto, bool> delegado = item =>
            {
                return true;
            };

            List<Producto> listaRespuesta = listaProducto.Where(delegado).ToList<Producto>();

            return Json(listaRespuesta, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ProcesarListaProductsVacia()
        {
            CreadorDeListaProducto creador = new CreadorDeListaProducto();
            List<Producto> listaProducto = creador.CrearListaProducto();

            Func<Producto, bool> delegado = item =>
            {
                return false;
            };

            List<Producto> listaRespuesta = listaProducto.Where(delegado).ToList<Producto>();

            return Json(listaRespuesta, JsonRequestBehavior.AllowGet);
        }


        public JsonResult OrdenarDeMayorAMenorPrecioTodo()
        {
            CreadorDeListaProducto creador = new CreadorDeListaProducto();
            List<Producto> listaProducto = creador.CrearListaProducto();
            List<Producto> listaRespuesta = new List<Producto>(); 

            
                Func<Producto, decimal> apuntador = item =>
                {
                    return (item.Precio);
                };

                listaRespuesta = listaProducto.OrderByDescending(apuntador).ToList<Producto>();
            
          
            return Json(listaRespuesta, JsonRequestBehavior.AllowGet);
        }


        public JsonResult OrdenarDeMayorAMenorPrecioActivos()
        {
            //descontinuado=false
            CreadorDeListaProducto creador = new CreadorDeListaProducto();
            List<Producto> listaProducto = creador.CrearListaProducto();
            List<Producto> listaRespuesta = new List<Producto>();


            Func<Producto, bool> apu = item => {
                if (item.Descontinuado == false)
                { return true; }
                else { return false; }
            };

            List<Producto> resumen = listaProducto.Where(apu).ToList<Producto>();

            Func<Producto, decimal> apu2 = item => { return item.Precio; };
            listaRespuesta = resumen.OrderByDescending(apu2).ToList<Producto>();

            return Json(listaRespuesta, JsonRequestBehavior.AllowGet);
        }

        public JsonResult OrdenarDeMayorAMenorDescontinuados()
        {
            //descontinuado=true
            CreadorDeListaProducto creador = new CreadorDeListaProducto();
            List<Producto> listaProducto = creador.CrearListaProducto();
            List<Producto> listaRespuesta = new List<Producto>();


            Func<Producto, bool> apu = item =>
            {
                if (item.Descontinuado == true)
                { return true; }
                else { return false; }
            };

            List<Producto> resumen = listaProducto.Where(apu).ToList<Producto>();
            Func<Producto, decimal> apu2 = item => { return item.Precio; };
            listaRespuesta = resumen.OrderByDescending(apu2).ToList<Producto>();

            return Json(listaRespuesta,JsonRequestBehavior.AllowGet);
        }
    }
}