

function ObtenerTorneo(TorneoID) {

    for (var i = 0; i < Torneos.length; i++) {

        if (Torneos[i].ID == TorneoID) {
            return Torneos[i];
        }

    }

    return null;
}

function ObtenerJugadoresTorneo(Torneo) {

    var JugadoresID = [];

    for (var p = 0; p < Torneo.Partidos.length; p++) {

        var Partido = Torneo.Partidos[p];

        if (!JugadoresID.includes(Partido.Equipo1Jugador1)) {
            JugadoresID.push(Partido.Equipo1Jugador1);
        }

        if (!JugadoresID.includes(Partido.Equipo1Jugador2)) {
            JugadoresID.push(Partido.Equipo1Jugador2);
        }

        if (!JugadoresID.includes(Partido.Equipo2Jugador1)) {
            JugadoresID.push(Partido.Equipo2Jugador1);
        }

        if (!JugadoresID.includes(Partido.Equipo2Jugador2)) {
            JugadoresID.push(Partido.Equipo2Jugador2);
        }

    }

    return JugadoresID;

}

function ObtenerEquiposTorneo(TorneoID) {

    var Equipos = [];

    for (var i = 0; i < Torneos.length; i++) {
        if (Torneos[i].ID == TorneoID) {
            for (var j = 0; j < Torneos[i].Partidos.length; j++) {

                var Equipo1 = {};
                Equipo1.Jugador1 = Torneos[i].Partidos[j].Equipo1Jugador1;
                Equipo1.Jugador2 = Torneos[i].Partidos[j].Equipo1Jugador2;

                var Equipo2 = {};
                Equipo2.Jugador1 = Torneos[i].Partidos[j].Equipo2Jugador1;
                Equipo2.Jugador2 = Torneos[i].Partidos[j].Equipo2Jugador2;

                var ExisteEquipo1 = false;
                var ExisteEquipo2 = false;

                for (var h = 0; h < Equipos.length; h++) {

                    if ((Equipos[h].Jugador1 == Equipo1.Jugador1 && Equipos[h].Jugador2 == Equipo1.Jugador2) || (Equipos[h].Jugador1 == Equipo1.Jugador2 && Equipos[h].Jugador2 == Equipo1.Jugador1)) {
                        ExisteEquipo1 = true;
                    }

                    if ((Equipos[h].Jugador1 == Equipo2.Jugador1 && Equipos[h].Jugador2 == Equipo2.Jugador2) || (Equipos[h].Jugador1 == Equipo2.Jugador2 && Equipos[h].Jugador2 == Equipo2.Jugador1)) {
                        ExisteEquipo2 = true;
                    }

                }

                if (Torneos[i].JugadoresZona1 != null) {
                    for (var z = 0; z < Torneos[i].JugadoresZona1.length; z++) {
                        if (Torneos[i].JugadoresZona1[z] == Equipo1.Jugador1 || Torneos[i].JugadoresZona1[z] == Equipo1.Jugador2) {
                            Equipo1.Zona = 1;
                        }
                        if (Torneos[i].JugadoresZona1[z] == Equipo2.Jugador1 || Torneos[i].JugadoresZona1[z] == Equipo2.Jugador2) {
                            Equipo2.Zona = 1;
                        }
                    }

                    for (var z = 0; z < Torneos[i].JugadoresZona2.length; z++) {
                        if (Torneos[i].JugadoresZona2[z] == Equipo1.Jugador1 || Torneos[i].JugadoresZona1[z] == Equipo1.Jugador2) {
                            Equipo1.Zona = 2;
                        }
                        if (Torneos[i].JugadoresZona2[z] == Equipo2.Jugador1 || Torneos[i].JugadoresZona1[z] == Equipo2.Jugador2) {
                            Equipo1.Zona = 2;
                        }
                    }
                }

                if (!ExisteEquipo1) {
                    if (Equipo1.Jugador1 != 0 && Equipo1.jugador2 != 0) {
                        Equipos.push(Equipo1);
                    }

                }

                if (!ExisteEquipo2) {
                    if (Equipo2.Jugador1 != 0 && Equipo2.jugador2 != 0) {
                        Equipos.push(Equipo2);
                    }
                }

                

            }

            for (var y = 0; y < Torneos[i].Equipos; y++) {
                
            }

        }

    }

    return Equipos;

}