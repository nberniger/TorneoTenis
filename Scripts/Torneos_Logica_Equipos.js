
function ObtenerCantidadPartidosJugadosTorneoEquipo(TorneoID, Equipo) {

    var Cantidad = 0;

    var Torneo = ObtenerTorneo(TorneoID);

    
    for (var j = 0; j < Torneo.Partidos.length; j++) {
        if (EquipoJugoPartido(Torneo.Partidos[j], Equipo.Jugador1, Equipo.Jugador2)) {
            Cantidad++;
        }
    }
            

    return Cantidad;

}

function ObtenerCantidadGamesGanadosTorneoEquipo(TorneoID, Equipo) {

    var Cantidad = 0;

    var Torneo = ObtenerTorneo(TorneoID);

    
    for (var j = 0; j < Torneo.Partidos.length; j++) {
        if (EquipoJugoPartido(Torneo.Partidos[j], Equipo.Jugador1, Equipo.Jugador2)) {            
            Cantidad += ObtenerCantidadGamesGanadosPartidoEquipo(Torneo.Partidos[j], Equipo.Jugador1, Equipo.Jugador2);            
        }
    }
        

    return Cantidad;

}

function ObtenerCantidadSetsGanadosTorneoEquipo(TorneoID, Equipo) {

    var Cantidad = 0;

    var Torneo = ObtenerTorneo(TorneoID);
    
    for (var j = 0; j < Torneo.Partidos.length; j++) {
        if (EquipoJugoPartido(Torneo.Partidos[j], Equipo.Jugador1, Equipo.Jugador2)) {            
            Cantidad += ObtenerCantidadSetsGanadosPartidoEquipo(Torneo.Partidos[j], Equipo.Jugador1, Equipo.Jugador2);            
        }
    }
        

    return Cantidad;

}

function ObtenerCantidadPartidosGanadosTorneoEquipo(TorneoID, Equipo) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        if (Torneos[i].ID == TorneoID) {
            for (var j = 0; j < Torneos[i].Partidos.length; j++) {
                if (EquipoJugoPartido(Torneos[i].Partidos[j], Equipo.Jugador1, Equipo.Jugador2)) {
                    
                    if (EquipoGanoPartido(Torneos[i].Partidos[j], Equipo.Jugador1, Equipo.Jugador2)) {
                        Cantidad++;
                    }
                    
                }
            }
        }


    }

    return Cantidad;

}


function ObtenerCantidadTorneosGanadosEquipo(Equipo) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        if (EquipoGanoTorneo(Torneos[i].ID, Equipo)) {
            Cantidad++;
        }

    }

    return Cantidad;

}

function EquipoGanoTorneo(TorneoID, Equipo) {

    var Torneo = ObtenerTorneo(TorneoID);

    var Equipos = ObtenerEquiposTorneo(TorneoID);

    var EquipoMasGano = null;
    var MaximaCantidadPartidos = 0;

    for (var i = 0; i < Equipos.length; i++) {

        var CantidadGanados = ObtenerCantidadPartidosGanadosTorneoEquipo(TorneoID, Equipos[i])

        if ((CantidadGanados > MaximaCantidadPartidos) || (CantidadGanados == MaximaCantidadPartidos && !EquiposIguales(Equipo,Equipos[i]))) {
            EquipoMasGano = Equipos[i];
            MaximaCantidadPartidos = CantidadGanados;
        }

    }

    return EquiposIguales(Equipo, EquipoMasGano);

}








