addEventListener('load', inicio, false);


function inicio()
{
    //Al inicio los 2 controles estan seleccionados
    document.getElementById('productoActivos').addEventListener('click', filtrado1, false);
    document.getElementById('productosDescontinuados').addEventListener('click', filtrado2, false);


    document.getElementById('ordenarMayorAMenor').addEventListener('click', ordenarMayorAMenor, false)
}


function filtrado1()
{
    if ((document.getElementById('productoActivos').checked===false) && (document.getElementById('productosDescontinuados').checked === true))
    {
        //"mostrar descontinuados"); 
        Solicitud2();
    }

    if ((document.getElementById('productoActivos').checked === true) && (document.getElementById('productosDescontinuados').checked === true)) {
        //mostrar todos
        Solicitud3();
    }


    if ((document.getElementById('productoActivos').checked === false) && (document.getElementById('productosDescontinuados').checked === false)) {
        //"mostrar una tabla vacia"
        Solicitud4();
    }

    if ((document.getElementById('productoActivos').checked === true) && (document.getElementById('productosDescontinuados').checked === false)) {
        //"mostrar una tabla vacia"
        Solicitud1();
    }
    
}

function filtrado2()
{
    if ((document.getElementById('productoActivos').checked===true) && (document.getElementById('productosDescontinuados').checked===false)) {
        //"mostrar continuados"
        Solicitud1();
    }

    if ((document.getElementById('productoActivos').checked === true) && (document.getElementById('productosDescontinuados').checked === true)) {
        //mostrar todos
        Solicitud3();
    }


    if ((document.getElementById('productoActivos').checked === false) && (document.getElementById('productosDescontinuados').checked === false)) {
        //"mostrar una tabla vacia"
        Solicitud4();
    }

    if ((document.getElementById('productoActivos').checked === false) && (document.getElementById('productosDescontinuados').checked === true)) {
        //"mostrar descontinuados
        Solicitud2();
    }

}


function Solicitud1()
{   
    $.ajax({
        url: '/Prueba2/ProcesarProductosActivos',
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',       
        success: function (result) {
            var html;
            html = '<table class="table table-hover" id="miTabla">'
            html+='<tr> <td>Id</td>  <td>Nombre</td> <td>Precio</td> <td>Cantidad</td> <td>Descontinuado</td> </tr>';

            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.Id + '</td>';
                html += '<td>' + item.Nombre + '</td>';
                html += '<td>' + item.Precio + '</td>';
                html += '<td>' + item.Cantidad + '</td>';
                html += '<td>' + item.Descontinuado + '</td>';
                html += '</tr>'
            });

           html+= '</table>'
           document.getElementById('ContenedorTabla').innerHTML = html;
        },
        error: function (errormessage) {
            alert(errormessage.responseText);        }
    })
}


    //obtener los productos desde el html
    //https://stackoverflow.com/questions/13242414/passing-a-list-of-objects-into-an-mvc-controller-method-using-jquery-ajax

function Solicitud2() {

    $.ajax({
        url: '/Prueba2/ProcesarProductosInactivos',
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (result) {
            var html;
            html = '<table class="table table-hover" id="miTabla">'
            html += '<tr> <td>Id</td>  <td>Nombre</td> <td>Precio</td> <td>Cantidad</td> <td>Descontinuado</td> </tr>';

            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.Id + '</td>';
                html += '<td>' + item.Nombre + '</td>';
                html += '<td>' + item.Precio + '</td>';
                html += '<td>' + item.Cantidad + '</td>';
                html += '<td>' + item.Descontinuado + '</td>';
                html += '</tr>'
            });

            html += '</table>'
            document.getElementById('ContenedorTabla').innerHTML = html;
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    })
}

function Solicitud3()
{
    $.ajax({
        url: '/Prueba2/ProcesarTodosProductos',
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (result) {
            var html;
            html = '<table class="table table-hover" id="miTabla">'
            html += '<tr> <td>Id</td>  <td>Nombre</td> <td>Precio</td> <td>Cantidad</td> <td>Descontinuado</td> </tr>';

            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.Id + '</td>';
                html += '<td>' + item.Nombre + '</td>';
                html += '<td>' + item.Precio + '</td>';
                html += '<td>' + item.Cantidad + '</td>';
                html += '<td>' + item.Descontinuado + '</td>';
                html += '</tr>'
            });

            html += '</table>'
            document.getElementById('ContenedorTabla').innerHTML = html;
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    })
}

function Solicitud4()
{
    $.ajax({
        url: '/Prueba2/ProcesarListaProductsVacia',
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (result) {
            var html;
            html = '<table class="table table-hover" id="miTabla">'
            html += '<tr> <td>Id</td>  <td>Nombre</td> <td>Precio</td> <td>Cantidad</td> <td>Descontinuado</td> </tr>';

            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.Id + '</td>';
                html += '<td>' + item.Nombre + '</td>';
                html += '<td>' + item.Precio + '</td>';
                html += '<td>' + item.Cantidad + '</td>';
                html += '<td>' + item.Descontinuado + '</td>';
                html += '</tr>'
            });

            html += '</table>'
            document.getElementById('ContenedorTabla').innerHTML = html;
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    })
}




function ordenarMayorAMenor()
{
    if(document.getElementById('ordenarMayorAMenor').checked==true )
    {
        document.getElementById('ordenaMenorAMayor').checked = false; //desmarcar el otro checkbox

        //los 2 checkbox de arriba estan seleccionado, ordenar todo
        if (document.getElementById('productoActivos').checked && document.getElementById('productosDescontinuados').checked)
        { SolicitarOrdenamientoMayorAMenorTodo(); }

     //el de la izquierda seleccionado, derecha apagado
        else if (document.getElementById('productoActivos').checked && (document.getElementById('productosDescontinuados').checked==false))
        { SolicitarOrdenamientMayorAMenorAProductosActivos(); }

        //el de la izquierda apagado, derecha selecccionado
        else if( (document.getElementById('productoActivos').checked==false) && (document.getElementById('productosDescontinuados').checked))
        { SolicitarOrdenamientoMayorAMenorADescontinuados();   }
     }
}


function SolicitarOrdenamientoMayorAMenorADescontinuados()
{
    $.ajax({
        url: "/Prueba2/OrdenarDeMayorAMenorDescontinuados",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html;
            html = '<table class="table table-hover" id="miTabla">'
            html += '<tr> <td>Id</td>  <td>Nombre</td> <td>Precio</td> <td>Cantidad</td> <td>Descontinuado</td> </tr>';

            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.Id + '</td>';
                html += '<td>' + item.Nombre + '</td>';
                html += '<td>' + item.Precio + '</td>';
                html += '<td>' + item.Cantidad + '</td>';
                html += '<td>' + item.Descontinuado + '</td>';
                html += '</tr>'
            });

            html += '</table>'
            document.getElementById('ContenedorTabla').innerHTML = html;
        },

        error: function (errormessage) {
            alert(errormessage.responseText);
        }

    });

}


function SolicitarOrdenamientMayorAMenorAProductosActivos()
{
    $.ajax({
        url: "/Prueba2/OrdenarDeMayorAMenorPrecioActivos",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html;
            html = '<table class="table table-hover" id="miTabla">'
            html += '<tr> <td>Id</td>  <td>Nombre</td> <td>Precio</td> <td>Cantidad</td> <td>Descontinuado</td> </tr>';

            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.Id + '</td>';
                html += '<td>' + item.Nombre + '</td>';
                html += '<td>' + item.Precio + '</td>';
                html += '<td>' + item.Cantidad + '</td>';
                html += '<td>' + item.Descontinuado + '</td>';
                html += '</tr>'
            });

            html += '</table>'
            document.getElementById('ContenedorTabla').innerHTML = html;
        },

        error: function (errormessage) {
            alert(errormessage.responseText);
        }

    });

}

function SolicitarOrdenamientoMayorAMenorTodo()
{
   
    
    $.ajax({
        url: "/Prueba2/OrdenarDeMayorAMenorPrecioTodo",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html;
            html = '<table class="table table-hover" id="miTabla">'
            html += '<tr> <td>Id</td>  <td>Nombre</td> <td>Precio</td> <td>Cantidad</td> <td>Descontinuado</td> </tr>';

            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.Id + '</td>';
                html += '<td>' + item.Nombre + '</td>';
                html += '<td>' + item.Precio + '</td>';
                html += '<td>' + item.Cantidad + '</td>';
                html += '<td>' + item.Descontinuado + '</td>';
                html += '</tr>'
            });

            html += '</table>'
            document.getElementById('ContenedorTabla').innerHTML = html;
        },

        error: function (errormessage) {
            alert(errormessage.responseText);
        }

    });
}