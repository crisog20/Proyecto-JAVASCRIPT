//Crear función eliminar
function Eliminar (i) {
//getElementsByTagName obtiene todos los elementos en el documento con el nombre de la etiqueta se especifica.
//Los objetos de la lista tienen un índice,el índice comienza en 0.
//El método setAttribute () añade el atributo especificado a un elemento.
    document.getElementsByTagName("table")[0].setAttribute("id","tableid");
//El getElementById() devuelve el elemento que tiene el atributo ID con el valor especificado.
//El deleteRow() elimina la fila en el índice especificado de una tabla.
    document.getElementById("tableid").deleteRow(i);
}

//Crer funcíon buscar que se ejecuta en el evento onkeyup-->El evento onkeyup se produce cuando el usuario suelta una tecla (en el teclado).
function Buscar() {
            var tabla = document.getElementById('tblPersonas');//variable tabla que obtiene los elementos con el id 'tblPersonas'
            var busqueda = document.getElementById('txtBusqueda').value.toLowerCase();//variable busqueda que obtiene los elementos con el id 'txtBusqueda', devuelve el valor en minúsculas.
            var cellsOfRow="";
            var found=false;
            var compareWith="";
            for (var i = 1; i < tabla.rows.length; i++) { //agarrar la columna en la que desea buscar, se pone 1 para evitar la cabecera que es la posición 0
                cellsOfRow = tabla.rows[i].getElementsByTagName('td');
//simplemente para renovar la variable al final de cada paso de bucle. Esto se hace porque la nueva iteración debe comenzar con found = False (por defecto al comienzo de cada búsqueda).
//De lo contrario, una vez que una linea seguida de otra su found en True , siempre permanecerá True (para las siguientes lineas , lo que es incorrecto).
                found = false;
                // Recorremos todas las celdas
                for (var j = 0; j < cellsOfRow.length && !found; j++) { compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                  // Buscamos el texto en el contenido de la celda
                 if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1)) //indexOf te retorna el primer indice que contienen la variable busqueda. si no tiene valor devolvera -1
                    {
                        found = true;
                    }
                }
                if(found)
                {
                    tabla.rows[i].style.display = '';

                } else {
                  // si no ha encontrado ninguna coincidencia, esconde la fila de la tabla
                    tabla.rows[i].style.display = 'none';
                }
            }
}
