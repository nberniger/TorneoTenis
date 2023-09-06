

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

        CeldaPartidosJugados.innerHTML = ObtenerCantidadPartidosJugadosEquipo(Equipos[i]);
        CeldaGamesGanados.innerHTML = ObtenerCantidadGamesGanadosEquipo(Equipos[i]);
        CeldaSetsGanados.innerHTML = ObtenerCantidadSetsGanadosEquipo(Equipos[i]);
        CeldaPartidosGanados.innerHTML = ObtenerCantidadPartidosGanadosEquipo(Equipos[i]);
        CeldaTorneosGanados.innerHTML = ObtenerCantidadTorneosGanadosEquipo(Equipos[i]);
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



function ObtenerCantidadPartidosJugadosEquipo(Equipo) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        Cantidad += ObtenerCantidadPartidosJugadosTorneoEquipo(Torneos[i].ID, Equipo);

    }

    return Cantidad;

}

function ObtenerCantidadGamesGanadosEquipo(Equipo) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        Cantidad += ObtenerCantidadGamesGanadosTorneoEquipo(Torneos[i].ID, Equipo);

    }

    return Cantidad;

}

function ObtenerCantidadSetsGanadosEquipo(Equipo) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        Cantidad += ObtenerCantidadSetsGanadosTorneoEquipo(Torneos[i].ID, Equipo);

    }

    return Cantidad;

}

function ObtenerCantidadPartidosGanadosEquipo(Equipo) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        Cantidad += ObtenerCantidadPartidosGanadosTorneoEquipo(Torneos[i].ID, Equipo);

    }

    return Cantidad;

}

function ObtenerCantidadTorneosGanadosEquipo(Equipo) {

    return ObtenerCantidadTorneosGanadosEquipo(Torneos[i].ID, Equipo);

}

function EquiposIguales(Equipo1, Equipo2) {

    return ((Equipo1.Jugador1 == Equipo2.Jugador1 && Equipo1.Jugador2 == Equipo2.Jugador2) || (Equipo1.Jugador1 == Equipo2.Jugador2 && Equipo1.Jugador2 == Equipo2.Jugador1))
    
}