using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication6.Models
{
    public class Producto
    {
        private int id;
        private string nombre;
        private decimal precio;
        private int cantidad;
        private bool descontinuado;

        //-----------constructors
        public Producto(int id,string nombre,decimal precio,int cantidad,bool descontinuado)
        {
            this.Id = id;
            this.Nombre = nombre;
            this.Precio = precio;
            this.Cantidad = cantidad;
            this.Descontinuado = descontinuado;
        }



        //------------------properties
        public int Id
        {
            set { id = value; }
            get { return id; }
        }

        public string Nombre
        {
            set { nombre = value; }
            get { return nombre; }
        }

        public decimal Precio
        {
            set { precio = value; }
            get { return precio; }
        }

        public int Cantidad
        {
            set { cantidad = value; }
            get { return cantidad; }
        }

        public bool Descontinuado
        {
            set { descontinuado = value; }
            get { return descontinuado; }
        }
    }
}