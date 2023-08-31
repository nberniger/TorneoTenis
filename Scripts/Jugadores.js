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
    
}

function MostrarJugadores() {


    for (var i = 0; i < Jugadores.length; i++) {

        var FilaJugador = tableJugadores.insertRow(tableJugadores.length);

        var CeldaJugador = FilaJugador.insertCell(0);
        var CeldaPartidosJugados = FilaJugador.insertCell(1);
        var CeldaGamesGanados = FilaJugador.insertCell(2);
        var CeldaSetsGanados = FilaJugador.insertCell(3);
        var CeldaPartidosGanados = FilaJugador.insertCell(4);
        var CeldaTorneosGanados = FilaJugador.insertCell(5);

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

        CeldaPartidosJugados.innerHTML = 0;
        CeldaGamesGanados.innerHTML = 0;
        CeldaSetsGanados.innerHTML = 0;
        CeldaPartidosGanados.innerHTML = 0;
        CeldaTorneosGanados.innerHTML = 0;

        //var divJugador = document.createElement('div');

        //divJugador.innerHTML = document.getElementById('divPlantillaJugador').innerHTML;

        //divJugador.innerHTML = divJugador.innerHTML.replace('@@Nombre@@', Jugadores[i].Nombre);

        //divJugadores.appendChild(divJugador);

    }

}

function MostrarEquipos() {

    var Equipos = ObtenerEquipos();

    for (var i = 0; i < Equipos.length; i++) {

        var FilaEquipo = tableEquipos.insertRow(tableEquipos.length);

        var CeldaEquipo = FilaEquipo.insertCell(0);
        var CeldaPartidosJugados = FilaEquipo.insertCell(1);
        var CeldaGamesGanados = FilaEquipo.insertCell(2);
        var CeldaSetsGanados = FilaEquipo.insertCell(3);
        var CeldaPartidosGanados = FilaEquipo.insertCell(4);
        var CeldaTorneosGanados = FilaEquipo.insertCell(5);
        
        CeldaEquipo.innerHTML = '<table><tr><td><i class="fa-solid fa-handshake" style="font-size:30px;color:#5c97ab"></i></td><td style="padding-left:6px">' + ObtenerNombreJugador(Equipos[i].Jugador1) + '<br/>' + ObtenerNombreJugador(Equipos[i].Jugador2) + '</td></tr></table>';
        CeldaEquipo.style.textAlign = 'left';

        CeldaEquipo.className = 'CeldaTablaJugadores';
        CeldaPartidosJugados.className = 'CeldaTablaJugadores';
        CeldaGamesGanados.className = 'CeldaTablaJugadores';
        CeldaSetsGanados.className = 'CeldaTablaJugadores';
        CeldaPartidosGanados.className = 'CeldaTablaJugadores';
        CeldaTorneosGanados.className = 'CeldaTablaJugadores';

        CeldaPartidosJugados.innerHTML = 0;
        CeldaGamesGanados.innerHTML = 0;
        CeldaSetsGanados.innerHTML = 0;
        CeldaPartidosGanados.innerHTML = 0;
        CeldaTorneosGanados.innerHTML = 0;
    }

}


function ObtenerEquipos() {

    var Equipos = [];

    for (var i = 0; i < Torneos.length; i++) {

        var EquiposTorneo = ObtenerEquiposTorneo(Torneos[i].ID);

        for (var j = 0; j < EquiposTorneo.length; j++) {

            var ExisteEquipo = false;

            
            for (var h = 0; h < Equipos.length; h++) {
                if ((Equipos[h].Jugador1 == EquiposTorneo[j].Jugador1 && Equipos[h].Jugador2 == EquiposTorneo[j].Jugador2) || (Equipos[h].Jugador1 == EquiposTorneo[j].Jugador2 || Equipos[h].Jugador2 == EquiposTorneo[j].Jugador1)) {
                    ExisteEquipo = true;
                }
            }
            
            

            if (!ExisteEquipo) {
                Equipos.push(EquiposTorneo[h]);
            }

        }
    }

    return Equipos;
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