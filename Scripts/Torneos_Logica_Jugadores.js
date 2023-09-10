


function ObtenerCantidadPartidosJugadosTorneoJugador(TorneoID, JugadorID) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        if (Torneos[i].ID == TorneoID) {
            for (var j = 0; j < Torneos[i].Partidos.length; j++) {
                if (JugadorJugoPartido(Torneos[i].Partidos[j], JugadorID)) {
                    Cantidad++;
                }
            }
        }


    }

    return Cantidad;

}

function ObtenerCantidadGamesGanadosTorneoJugador(TorneoID, JugadorID) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        if (Torneos[i].ID == TorneoID) {
            for (var j = 0; j < Torneos[i].Partidos.length; j++) {
                if (JugadorJugoPartido(Torneos[i].Partidos[j], JugadorID)) {
                    
                    Cantidad += ObtenerCantidadGamesGanadosPartidoJugador(Torneos[i].Partidos[j], JugadorID);
                    
                }
            }
        }


    }

    return Cantidad;

}

function ObtenerCantidadSetsGanadosTorneoJugador(TorneoID, JugadorID) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        if (Torneos[i].ID == TorneoID) {
            for (var j = 0; j < Torneos[i].Partidos.length; j++) {
                if (JugadorJugoPartido(Torneos[i].Partidos[j], JugadorID)) {
                    
                    Cantidad += ObtenerCantidadSetsGanadosPartidoJugador(Torneos[i].Partidos[j], JugadorID);                    

                }
            }
        }


    }

    return Cantidad;

}

function ObtenerCantidadPartidosGanadosTorneoJugador(TorneoID, JugadorID) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        if (Torneos[i].ID == TorneoID) {
            for (var j = 0; j < Torneos[i].Partidos.length; j++) {
                if (JugadorJugoPartido(Torneos[i].Partidos[j], JugadorID)) {
                    
                    if (JugadorGanoPartido(Torneos[i].Partidos[j], JugadorID)) {
                        Cantidad++;
                    }                    

                }
            }
        }


    }

    return Cantidad;

}


function ObtenerCantidadTorneosGanadosJugador(JugadorID) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        if (JugadorGanoTorneo(Torneos[i].ID, JugadorID)) {
            Cantidad++;
        }

    }

    return Cantidad;

}

function JugadorGanoTorneo(TorneoID, JugadorID) {

    var Torneo = ObtenerTorneo(TorneoID);

    var Jugadores = ObtenerJugadoresTorneo(Torneo);

    var JugadorMasGano = null;
    var MaximaCantidadPartidos = 0;

    for (var i = 0; i < Jugadores.length; i++) {

        var CantidadGanados = ObtenerCantidadPartidosGanadosTorneoJugador(TorneoID, Jugadores[i])

        if ((CantidadGanados > MaximaCantidadPartidos) || (CantidadGanados == MaximaCantidadPartidos && JugadorMasGano != JugadorID)) {
            JugadorMasGano = Jugadores[i];
            MaximaCantidadPartidos = CantidadGanados;
        }

    }

    return JugadorMasGano == JugadorID;

}








