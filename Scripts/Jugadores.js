var Jugadores = [];

function InicializarJugadores() {

    var Jugador1 = {};
    Jugador1.ID = 1;
    Jugador1.Nombre = 'Nicolas Berniger';
    Jugador1.NombreImagen = Jugador1.ID + '.png';
    Jugadores.push(Jugador1);

    var Jugador2 = {};
    Jugador2.ID = 2;
    Jugador2.Nombre = 'Alberto Baldomenico';
    Jugador2.NombreImagen = null;
    Jugadores.push(Jugador2);

    var Jugador3 = {};
    Jugador3.ID = 3;
    Jugador3.Nombre = 'Leonardo Piovesan';
    Jugador3.NombreImagen = null;
    Jugadores.push(Jugador3);

    var Jugador4 = {};
    Jugador4.ID = 4;
    Jugador4.Nombre = 'Sebastian Padin';
    Jugador4.NombreImagen = null;
    Jugadores.push(Jugador4);

    var Jugador5 = {};
    Jugador5.ID = 5;
    Jugador5.Nombre = 'Marcelo Agulleiro';
    Jugador5.NombreImagen = null;
    Jugadores.push(Jugador5);

    var Jugador6 = {};
    Jugador6.ID = 6;
    Jugador6.Nombre = 'Marcelo Alignani';
    Jugador6.NombreImagen = null;
    Jugadores.push(Jugador6);

    var Jugador7 = {};
    Jugador7.ID = 7;
    Jugador7.Nombre = 'Marcelo Gelvez';
    Jugador7.NombreImagen = null;
    Jugadores.push(Jugador7);

    var Jugador8 = {};
    Jugador8.ID = 8;
    Jugador8.Nombre = 'Daniel';
    Jugador8.NombreImagen = null;
    Jugadores.push(Jugador8);

    var Jugador9 = {};
    Jugador9.ID = 9;
    Jugador9.Nombre = 'Flavio';
    Jugador9.NombreImagen = null;
    Jugadores.push(Jugador9);

    var Jugador10 = {};
    Jugador10.ID = 10;
    Jugador10.Nombre = 'Javier';
    Jugador10.NombreImagen = null;
    Jugadores.push(Jugador10);

    var Jugador11 = {};
    Jugador11.ID = 11;
    Jugador11.Nombre = 'Martin Veltri';
    Jugador11.NombreImagen = null;
    Jugadores.push(Jugador11);

    var Jugador12 = {};
    Jugador12.ID = 12;
    Jugador12.Nombre = 'Guille';
    Jugador12.NombreImagen = null;
    Jugadores.push(Jugador12);

    var Jugador13 = {};
    Jugador13.ID = 13;
    Jugador13.Nombre = 'Fernando Arce';
    Jugador13.NombreImagen = null;
    Jugadores.push(Jugador13);

    var Jugador14 = {};
    Jugador14.ID = 14;
    Jugador14.Nombre = 'Leonel Di Paolo';
    Jugador14.NombreImagen = null;
    Jugadores.push(Jugador14);

    var Jugador15 = {};
    Jugador15.ID = 15;
    Jugador15.Nombre = 'Otto Silvestri';
    Jugador15.NombreImagen = null;
    Jugadores.push(Jugador15);


    var Jugador16 = {};
    Jugador16.ID = 16;
    Jugador16.Nombre = 'Monica';
    Jugador16.NombreImagen = null;
    Jugadores.push(Jugador16);

    
}

function MostrarJugadores() {

    for (var i = 0; i < Jugadores.length; i++) {

        //Establecer cantidades aca para hacer el sort antes de renderizar la tabla

        Jugadores[i].CantidadPartidosJugados = ObtenerCantidadPartidosJugadosJugador(Jugadores[i].ID);
        Jugadores[i].CantidadGamesGanados = ObtenerCantidadGamesGanadosJugador(Jugadores[i].ID);
        Jugadores[i].CantidadSetsGanados = ObtenerCantidadSetsGanadosJugador(Jugadores[i].ID);
        Jugadores[i].CantidadPartidosGanados = ObtenerCantidadPartidosGanadosJugador(Jugadores[i].ID);
        Jugadores[i].CantidadTorneosGanados = ObtenerCantidadTorneosGanadosJugador(Jugadores[i].ID);
        Jugadores[i].Puntos = ObtenerPuntosJugador(Jugadores[i]);
    }

    Jugadores = Jugadores.sort(function (b, a) {
        return parseInt(a.Puntos) - parseInt(b.Puntos);
    });

    for (var i = 0; i < Jugadores.length; i++) {

        var FilaJugador = tableJugadores.insertRow(tableJugadores.length);

        var CeldaJugador = FilaJugador.insertCell(0);
        var CeldaPartidosJugados = FilaJugador.insertCell(1);
        var CeldaGamesGanados = FilaJugador.insertCell(2);
        var CeldaSetsGanados = FilaJugador.insertCell(3);
        var CeldaPartidosGanados = FilaJugador.insertCell(4);
        var CeldaTorneosGanados = FilaJugador.insertCell(5);
        var CeldaPuntos = FilaJugador.insertCell(6);

        if (Jugadores[i].NombreImagen != null) {
            CeldaJugador.innerHTML = '<table><tr><td><img src="./Imagenes/Jugadores/' + Jugadores[i].NombreImagen + '" style="width:40px;height:40px"/></td><td style="padding-left:6px">' + Jugadores[i].Nombre + '</td></tr></table>';
        } else {
            CeldaJugador.innerHTML = '<table><tr><td><i class="fa-solid fa-circle-user" style="font-size:30px;color:#668ba7"></i></td><td style="padding-left:6px">' + Jugadores[i].Nombre + '</td></tr></table>';
        }
        
        CeldaJugador.style.textAlign = 'left';

        CeldaJugador.className = 'CeldaTablaJugadores';
        CeldaPartidosJugados.className = 'CeldaTablaJugadores';
        CeldaGamesGanados.className = 'CeldaTablaJugadores';
        CeldaSetsGanados.className = 'CeldaTablaJugadores';
        CeldaPartidosGanados.className = 'CeldaTablaJugadores';
        CeldaTorneosGanados.className = 'CeldaTablaJugadores';
        CeldaPuntos.className = 'CeldaTablaJugadores';
        CeldaPuntos.style.color = '#04b41a';

        CeldaPartidosJugados.innerHTML = Jugadores[i].CantidadPartidosJugados;
        CeldaGamesGanados.innerHTML = Jugadores[i].CantidadGamesGanados;
        CeldaSetsGanados.innerHTML = Jugadores[i].CantidadSetsGanados;
        CeldaPartidosGanados.innerHTML = Jugadores[i].CantidadPartidosGanados;
        CeldaTorneosGanados.innerHTML = Jugadores[i].CantidadTorneosGanados;
        CeldaPuntos.innerHTML = Jugadores[i].Puntos;

        //var divJugador = document.createElement('div');

        //divJugador.innerHTML = document.getElementById('divPlantillaJugador').innerHTML;

        //divJugador.innerHTML = divJugador.innerHTML.replace('@@Nombre@@', Jugadores[i].Nombre);

        //divJugadores.appendChild(divJugador);

    }

}



function ObtenerJugador(ID) {

    for (var i = 0; i < Jugadores.length; i++) {
        if (Jugadores[i].ID == ID) {
            return Jugadores[i];
        }
    }

    return null;

}

function ObtenerNombreJugador(ID) {
    var Jugador = ObtenerJugador(ID);
    if (Jugador != null) {
        return Jugador.Nombre;
    } else {
        return '';
    }
}


function ObtenerCantidadPartidosJugadosJugador(JugadorID) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        Cantidad += ObtenerCantidadPartidosJugadosTorneoJugador(Torneos[i].ID,JugadorID);

    }

    return Cantidad;

}            

function ObtenerCantidadGamesGanadosJugador(JugadorID) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        Cantidad += ObtenerCantidadGamesGanadosTorneoJugador(Torneos[i].ID, JugadorID);

    }

    return Cantidad;

}

function ObtenerCantidadSetsGanadosJugador(JugadorID) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        Cantidad += ObtenerCantidadSetsGanadosTorneoJugador(Torneos[i].ID, JugadorID);

    }

    return Cantidad;

}

function ObtenerCantidadPartidosGanadosJugador(JugadorID) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        Cantidad += ObtenerCantidadPartidosGanadosTorneoJugador(Torneos[i].ID, JugadorID);

    }

    return Cantidad;

}

function ObtenerCantidadTorneosGanadosJugador(JugadorID) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length[i]; i++) {
        if (JugadorGanoTorneo(Torneos[i].ID, JugadorID)) {
            Cantidad++;
        }
    }

    return Cantidad;
    

}

function ObtenerPuntosJugador(Jugador) {

    var Puntos = 0;
    
    Puntos += 1 * Jugador.CantidadGamesGanados;
    Puntos += 5 * Jugador.CantidadSetsGanados;
    Puntos += 30 * Jugador.CantidadPartidosGanados;
    Puntos += 1000 * Jugador.CantidadTorneosGanados;

    return Puntos;

}