var Torneos = [];
var Partidos = [];

function InicializarTorneos() {


    InicializarTorneo1();

    MostrarTorneos();

}

function InicializarTorneo1() {

    var Torneo1 = {};
    Torneo1.ID = 1;
    Torneo1.Nombre = 'Torneo 1';
    Torneos.push(Torneo1);

    Torneo1.Partidos = [];
    
    var Partido1 = {};    
    Partido1.Fase = 'Fase de grupos';
    Partido1.Fecha = 'Martes 05/09/2023 19:00 - Cancha 4';
    Partido1.Equipo1Jugador1 = 1;
    Partido1.Equipo1Jugador2 = 5;
    Partido1.Equipo2Jugador1 = 6;
    Partido1.Equipo2Jugador2 = 4;
    Partido1.Set1_Puntos_Equipo1 = 0;
    Partido1.Set1_Puntos_Equipo2 = 0;
    Partido1.Set2_Puntos_Equipo1 = 0;
    Partido1.Set2_Puntos_Equipo2 = 0;
    Partido1.Set3_Puntos_Equipo1 = 0;
    Partido1.Set3_Puntos_Equipo2 = 0;
    Torneo1.Partidos.push(Partido1);

    var Partido2 = {};
    Partido2.Fase = 'Fase de grupos';
    Partido2.Fecha = '--/--/-- --:--'
    Partido2.Equipo1Jugador1 = 7;
    Partido2.Equipo1Jugador2 = 3;
    Partido2.Equipo2Jugador1 = 8;
    Partido2.Equipo2Jugador2 = 2;
    Partido2.Set1_Puntos_Equipo1 = 0;
    Partido2.Set1_Puntos_Equipo2 = 0;
    Partido2.Set2_Puntos_Equipo1 = 0;
    Partido2.Set2_Puntos_Equipo2 = 0;
    Partido2.Set3_Puntos_Equipo1 = 0;
    Partido2.Set3_Puntos_Equipo2 = 0;
    Torneo1.Partidos.push(Partido2);

    //var Partido3 = {};
    //Partido3.Fase = 'Final';
    //Partido3.Fecha = '01/01/2000 19:00';
    //Partido3.Equipo1Jugador1 = 0;
    //Partido3.Equipo1Jugador2 = 0;
    //Partido3.Equipo2Jugador1 = 0;
    //Partido3.Equipo2Jugador2 = 0;
    //Partido3.Set1_Puntos_Equipo1 = 0;
    //Partido3.Set1_Puntos_Equipo2 = 0;
    //Partido3.Set2_Puntos_Equipo1 = 0;
    //Partido3.Set2_Puntos_Equipo2 = 0;
    //Partido3.Set3_Puntos_Equipo1 = 0;
    //Partido3.Set3_Puntos_Equipo2 = 0;
    //Torneo1.Partidos.push(Partido3);

    

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
        }
        
    }

    return Equipos;

}

function ObtenerCantidadPartidosJugadosTorneoJugador(TorneoID,JugadorID) {

    var Cantidad = 0;

    for (var i = 0; i < Torneos.length; i++) {

        if (Torneos[i].ID == TorneoID) {
            for (var j = 0; j < Torneos[i].Partidos.length; j++) {
                if (JugadorJugoPartido(Torneos[i].Partidos[j],JugadorID))                        
                {
                    Cantidad++;
                }
            }
        }
        

    }

    return Cantidad;

}


function JugadorJugoPartido(Partido,JugadorID) {
    if (
        (
            Partido.Equipo1Jugador1 == JugadorID ||
            Partido.Equipo1Jugador2 == JugadorID ||
            Partido.Equipo2Jugador1 == JugadorID ||
            Partido.Equipo2Jugador2 == JugadorID
        ) && (Partido.Set1_Puntos_Equipo1 > 0 || Partido.Set1_Puntos_Equipo2 > 0)
    ) {
        return true;
    } else {
        return false;
    }
}