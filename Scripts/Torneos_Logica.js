

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

                //var ExisteEquipo1 = false;
                //var ExisteEquipo2 = false;

                //for (var h = 0; h < Equipos.length; h++) {

                //    if ((Equipos[h].Jugador1 == Equipo1.Jugador1 && Equipos[h].Jugador2 == Equipo1.Jugador2) || (Equipos[h].Jugador1 == Equipo1.Jugador2 && Equipos[h].Jugador2 == Equipo1.Jugador1)) {
                //        ExisteEquipo1 = true;
                //    }

                //    if ((Equipos[h].Jugador1 == Equipo2.Jugador1 && Equipos[h].Jugador2 == Equipo2.Jugador2) || (Equipos[h].Jugador1 == Equipo2.Jugador2 && Equipos[h].Jugador2 == Equipo2.Jugador1)) {
                //        ExisteEquipo2 = true;
                //    }

                //}

                if (Torneos[i].EquiposZona1 != null) {
                    for (var z = 0; z < Torneos[i].EquiposZona1.length; z++) {
                        if (EquiposIguales(Torneos[i].EquiposZona1[z], Equipo1)) {
                            Equipo1.Zona = 1;
                        }
                        if (EquiposIguales(Torneos[i].EquiposZona1[z], Equipo2)) {
                            Equipo2.Zona = 1;
                        }
                        //if (Torneos[i].JugadoresZona1[z] == Equipo1.Jugador1 || Torneos[i].JugadoresZona1[z] == Equipo1.Jugador2) {
                        //    Equipo1.Zona = 1;
                        //}
                        //if (Torneos[i].JugadoresZona1[z] == Equipo2.Jugador1 || Torneos[i].JugadoresZona1[z] == Equipo2.Jugador2) {
                        //    Equipo2.Zona = 1;
                        //}
                    }

                    for (var z = 0; z < Torneos[i].EquiposZona2.length; z++) {
                        if (EquiposIguales(Torneos[i].EquiposZona2[z], Equipo1)) {
                            Equipo1.Zona = 2;
                        }
                        if (EquiposIguales(Torneos[i].EquiposZona2[z], Equipo2)) {
                            Equipo2.Zona = 2;
                        }
                        //if (Torneos[i].JugadoresZona2[z] == Equipo1.Jugador1 || Torneos[i].JugadoresZona1[z] == Equipo1.Jugador2) {
                        //    Equipo1.Zona = 2;
                        //}
                        //if (Torneos[i].JugadoresZona2[z] == Equipo2.Jugador1 || Torneos[i].JugadoresZona1[z] == Equipo2.Jugador2) {
                        //    Equipo1.Zona = 2;
                        //}
                    }
                }

                
                if (!EquipoYaAgregado(Equipo1, Equipos)){
                    if (Equipo1.Jugador1 != 0 && Equipo1.jugador2 != 0) {
                        Equipos.push(Equipo1);
                    }

                }

                if (!EquipoYaAgregado(Equipo2, Equipos)) {                
                    if (Equipo2.Jugador1 != 0 && Equipo2.jugador2 != 0) {
                        Equipos.push(Equipo2);
                    }
                }

                

            }

            if (Torneos[i].EquiposZona1 != null) {
                for (var y = 0; y < Torneos[i].EquiposZona1.length; y++) {
                    if (!EquipoYaAgregado(Torneos[i].EquiposZona1[y], Equipos)) {
                        Equipos.push(Torneos[i].EquiposZona1[y]);
                    }
                }
            }
            
            if (Torneos[i].EquiposZona2 != null) {
                for (var y = 0; y < Torneos[i].EquiposZona2.length; y++) {
                    if (!EquipoYaAgregado(Torneos[i].EquiposZona2[y], Equipos)) {
                        Equipos.push(Torneos[i].EquiposZona2[y]);
                    }
                }
            }
            

        }

    }

    return Equipos;

}
function EquipoYaAgregado(Equipo, Equipos) {
    

    for (var i = 0; i < Equipos.length; i++) {
        if (EquiposIguales(Equipo, Equipos[i])) {
            return true;
        }
    }

    return false;
}