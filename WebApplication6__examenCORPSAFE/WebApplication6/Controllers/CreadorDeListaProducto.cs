using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication6.Models
{
    public class CreadorDeListaProducto
    {
        //-----------constuctor
        public CreadorDeListaProducto()
        {
        }//constuctor sin parametros

        public List<Producto> CrearListaProducto()
        {
            List<Producto> listaProductos = new List<Producto>();
            listaProductos.Add( new Producto(1, "nombre uno", 1.1m, 1, true) );
            listaProductos.Add( new Producto(2,"nombre dos",2.2m,2,true));
            listaProductos.Add(new Producto(3, "nombre tres", 3.3m, 3, true));
            listaProductos.Add(new Producto(4, "nombre cuatro", 4.4m, 4, true));
            listaProductos.Add(new Producto(5, "nombre cinco", 5.5m, 5, true));
            listaProductos.Add(new Producto(6, "nombre seis", 6.6m, 6, true));
            listaProductos.Add(new Producto(7, "nombre siete", 7.7m, 7, true));
            listaProductos.Add(new Producto(8, "nombre ocho", 8.8m, 8, true));
            listaProductos.Add(new Producto(9, "nombre nueve", 9.9m, 9, true));
            listaProductos.Add(new Producto(10, "nombre diez", 10.10m, 10, true));
            listaProductos.Add(new Producto(11, "nombre once", 11.11m, 11, true));
            listaProductos.Add(new Producto(12, "nombre doce", 12.12m, 12, true));
            listaProductos.Add(new Producto(13, "nombre trece", 13.13m, 13, true));

            listaProductos.Add(new Producto(14, "nombre catorce", 14.14m, 14, false));
            listaProductos.Add(new Producto(15, "nombre quince", 15.15m, 15, false));
            listaProductos.Add(new Producto(16, "nombre diez y seis", 16.16m, 16, false));
            listaProductos.Add(new Producto(17, "nombre diez y siete", 17.17m, 17, false));
            listaProductos.Add(new Producto(18, "nombre diez y ocho", 18.18m, 18, false));
            listaProductos.Add(new Producto(19, "nombre diez y nueve", 19.19m, 19, false));
            listaProductos.Add(new Producto(20, "nombre veinte", 20.20m, 20, false));
            listaProductos.Add(new Producto(21, "nombre veinte y uno", 21.21m, 21, false));
            listaProductos.Add(new Producto(22, "nombre veinte y dos", 22.22m, 22, false));
            listaProductos.Add(new Producto(23, "nombre veinte y tres", 23.23m, 23, false));
            listaProductos.Add(new Producto(24, "nombre veinte y cuatro", 24.24m, 24, false));
            listaProductos.Add(new Producto(25, "nombre veinte y cinco", 25.25m, 25, false));

            return (listaProductos);
        }
    }
}