using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication6.Models
{
    public class Persona
    {
        private string nombre;
        private int edad;
        private bool estadoCivil;
        private int mesAnio;
        private string genero;

        //-------------constructor
        public Persona()
        {
            this.Nombre = "???";
            this.Edad = 0;
            this.EstadoCivil = false;
            this.MesAnio = 0;
            this.Genero = "???";
        }//constructor sin parametros

        public Persona(string nombre,int edad,bool estadoCivil, int mesAnio,string genero)
        {
            this.Nombre = nombre;
            this.Edad = edad;
            this.EstadoCivil = estadoCivil;
            this.MesAnio = mesAnio;
            this.Genero = genero;
        }

        //-----------properties
        public string Nombre
        {
            set { nombre = value; }
            get { return nombre; }
        }

        public int Edad
        {
            set { edad = value; }
            get { return edad; }
        }

        public bool EstadoCivil
        {
            set { estadoCivil = value; }
            get { return estadoCivil; }
        }

        public int MesAnio
        {
            set { mesAnio = value; }
            get { return mesAnio; }
        }

        public string Genero
        {
            set { genero = value; }
            get { return genero; }
        }
    }
}