

function MostrarEquipos() {

    var Equipos = ObtenerEquipos();

    for (var i = 0; i < Equipos.length; i++) {

        //Establecer cantidades aca para hacer el sort antes de renderizar la tabla

        Equipos[i].CantidadPartidosJugados = ObtenerCantidadPartidosJugadosEquipo(Equipos[i]);
        Equipos[i].CantidadGamesGanados = ObtenerCantidadGamesGanadosEquipo(Equipos[i]);
        Equipos[i].CantidadSetsGanados = ObtenerCantidadSetsGanadosEquipo(Equipos[i]);
        Equipos[i].CantidadPartidosGanados = ObtenerCantidadPartidosGanadosEquipo(Equipos[i]);
        Equipos[i].CantidadTorneosGanados = ObtenerCantidadTorneosGanadosEquipo(Equipos[i]);
        Equipos[i].Puntos = ObtenerPuntosEquipo(Equipos[i]);

    }

    Equipos = Equipos.sort(function (b, a) {
        return a.Puntos - b.Puntos;
    });

    for (var i = 0; i < Equipos.length; i++) {

        var FilaEquipo = tableEquipos.insertRow(tableEquipos.length);

        var CeldaEquipo = FilaEquipo.insertCell(0);
        var CeldaPartidosJugados = FilaEquipo.insertCell(1);
        var CeldaGamesGanados = FilaEquipo.insertCell(2);
        var CeldaSetsGanados = FilaEquipo.insertCell(3);
        var CeldaPartidosGanados = FilaEquipo.insertCell(4);
        var CeldaTorneosGanados = FilaEquipo.insertCell(5);
        var CeldaPuntos = FilaEquipo.insertCell(6);
        
        CeldaEquipo.innerHTML = '<table><tr><td><i class="fa-solid fa-handshake" style="font-size:30px;color:#5c97ab"></i></td><td style="padding-left:6px">' + ObtenerNombreJugador(Equipos[i].Jugador1) + '<br/>' + ObtenerNombreJugador(Equipos[i].Jugador2) + '</td></tr></table>';
        CeldaEquipo.style.textAlign = 'left';

        CeldaEquipo.className = 'CeldaTablaJugadores';
        CeldaPartidosJugados.className = 'CeldaTablaJugadores';
        CeldaGamesGanados.className = 'CeldaTablaJugadores';
        CeldaSetsGanados.className = 'CeldaTablaJugadores';
        CeldaPartidosGanados.className = 'CeldaTablaJugadores';
        CeldaTorneosGanados.className = 'CeldaTablaJugadores';
        CeldaPuntos.className = 'CeldaTablaJugadores';
        CeldaPuntos.style.color = '#04b41a';

        CeldaPartidosJugados.innerHTML = Equipos[i].CantidadPartidosJugados;
        CeldaGamesGanados.innerHTML = Equipos[i].CantidadGamesGanados;
        CeldaSetsGanados.innerHTML = Equipos[i].CantidadSetsGanados;
        CeldaPartidosGanados.innerHTML = Equipos[i].CantidadPartidosGanados;
        CeldaTorneosGanados.innerHTML = Equipos[i].CantidadTorneosGanados;
        CeldaPuntos.innerHTML = Equipos[i].Puntos;
    }

}


function ObtenerEquipos() {

    var Equipos = [];

    for (var i = 0; i < Torneos.length; i++) {

        var EquiposTorneo = ObtenerEquiposTorneo(Torneos[i].ID);

        for (var j = 0; j < EquiposTorneo.length; j++) {

            var ExisteEquipo = false;

            
            for (var h = 0; h < Equipos.length; h++) {
                /*if ((Equipos[h].Jugador1 == EquiposTorneo[j].Jugador1 && Equipos[h].Jugador2 == EquiposTorneo[j].Jugador2) || (Equipos[h].Jugador1 == EquiposTorneo[j].Jugador2 || Equipos[h].Jugador2 == EquiposTorneo[j].Jugador1)) {*/
                if (EquiposIguales(Equipos[h], EquiposTorneo[j])) {
                    ExisteEquipo = true;
                }
            }
            
            

            if (!ExisteEquipo) {
                if (EquiposTorneo[j] != null) {
                    Equipos.push(EquiposTorneo[j]);
                }
                
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

    return (
                (
                    (Equipo1.Jugador1 == Equipo2.Jugador1 && Equipo1.Jugador2 == Equipo2.Jugador2) || (Equipo1.Jugador1 == Equipo2.Jugador2 && Equipo1.Jugador2 == Equipo2.Jugador1)
                ) && Equipo1.Zona == Equipo2.Zona
            )
        
}


function ObtenerPuntosEquipo(Equipo) {

    var Puntos = 0;

    Puntos += 1 * Equipo.CantidadGamesGanados;
    Puntos += 5 * Equipo.CantidadSetsGanados;
    Puntos += 30 * Equipo.CantidadPartidosGanados;
    Puntos += 1000 * Equipo.CantidadTorneosGanados;

    return Puntos;

}