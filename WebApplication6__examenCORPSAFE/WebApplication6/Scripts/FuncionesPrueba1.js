function hola()
{
    //----------Recuperar valores desde el formulario
    var nombre = $('#Nombre').val();
    var edad = $('#Edad').val();

    var estadoCivil;
    if (document.getElementById('EstadoCivil').checked)
    {
        estadoCivil = true;
    }
    else {
        estadoCivil = false;
    }
    
    var mesanio = $('#MesAnio').val();

    var genero;
    if (document.getElementById('Radio1').checked)
    { genero = "Hombre"; }

    if (document.getElementById('Radio2').checked)
    {
        genero="Mujer";
    }

    //----------Solicitud ajax
    var objeto = {
        "Nombre": nombre,
        "Edad": edad,
        "EstadoCivil": estadoCivil,
        "MesAnio": mesanio,
        "Genero": genero
    };


    $.ajax({
        url: "/Prueba1/CrearObjeto",
        data: JSON.stringify(objeto),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            document.getElementById('resultado').innerHTML = '<h3>Nombre: ' + result.Nombre +
                ' Edad: ' + result.Edad + ' EstadoCivil: ' + result.EstadoCivil +
                ' (TRUE = CASADO, FALSE = SOLTERO) ' + ' Mes: ' + result.MesAnio +
                ' Genero: ' + result.Genero + '</h3>';
 
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });

    
}

function hola2()
{
    //----------Recuperar valores desde el formulario
    var nombre = $('#Nombre').val();
    var edad = $('#Edad').val();

    var estadoCivil;
    if (document.getElementById('EstadoCivil').checked) {
        estadoCivil = true;
    }
    else {
        estadoCivil = false;
    }

    var mesanio = $('#MesAnio').val();

    var genero;
    if (document.getElementById('Radio1').checked)
    { genero = "Hombre"; }

    if (document.getElementById('Radio2').checked) {
        genero = "Mujer";
    }

    //----------Solicitud ajax
    var objeto = {
        "per.Nombre": nombre,
        "per.Edad": edad,
        "per.EstadoCivil": estadoCivil,
        "per.MesAnio": mesanio,
        "per.Genero": genero
    };


    $.ajax({
        url: "/Prueba1/CrearNuevamenteObjeto",
        data: JSON.stringify(objeto),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            alert( 'Nombre: ' + result.Nombre +
                ' Edad: ' + result.Edad + ' EstadoCivil: ' + result.EstadoCivil +
                ' (TRUE = CASADO, FALSE = SOLTERO) ' + ' Mes: ' + result.MesAnio +
                ' Genero: ' + result.Genero);

        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });


}