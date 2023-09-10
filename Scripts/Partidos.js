

function ObtenerCantidadGamesGanadosPartidoJugador(Partido, JugadorID) {

    if (Partido.Equipo1Jugador1 == JugadorID || Partido.Equipo1Jugador2 == JugadorID) {
        return Partido.Set1_Puntos_Equipo1 + Partido.Set2_Puntos_Equipo1 + Partido.Set3_Puntos_Equipo1
    } else if (Partido.Equipo2Jugador1 == JugadorID || Partido.Equipo2Jugador2 == JugadorID) {
        return Partido.Set1_Puntos_Equipo2 + Partido.Set2_Puntos_Equipo2 + Partido.Set3_Puntos_Equipo2
    } else {
        return 0;
    }

}

function ObtenerCantidadSetsGanadosPartidoJugador(Partido,JugadorID) {

    var Cantidad = 0;

    if (Partido.Equipo1Jugador1 == JugadorID || Partido.Equipo1Jugador2 == JugadorID) {

        if (Partido.Set1_Puntos_Equipo1 > Partido.Set1_Puntos_Equipo2) {
            Cantidad++;
        }

        if (Partido.Set2_Puntos_Equipo1 > Partido.Set2_Puntos_Equipo2) {
            Cantidad++;
        }

        if (Partido.Set3_Puntos_Equipo1 > Partido.Set3_Puntos_Equipo2) {
            Cantidad++;
        }
        
    } else if (Partido.Equipo2Jugador1 == JugadorID || Partido.Equipo2Jugador2 == JugadorID) {

        if (Partido.Set1_Puntos_Equipo2 > Partido.Set1_Puntos_Equipo1) {
            Cantidad++;
        }

        if (Partido.Set2_Puntos_Equipo2 > Partido.Set2_Puntos_Equipo1) {
            Cantidad++;
        }

        if (Partido.Set3_Puntos_Equipo2 > Partido.Set3_Puntos_Equipo1) {
            Cantidad++;
        }

    }

    return Cantidad;

}

function JugadorGanoPartido(Partido, JugadorID) {

    var CantidadEquipo1 = 0;
    var CantidadEquipo2 = 0;

    if (Partido.Set1_Puntos_Equipo1 > Partido.Set1_Puntos_Equipo2) {
        CantidadEquipo1++;
    } else {
        CantidadEquipo2++;
    }

    if (Partido.Set2_Puntos_Equipo1 > Partido.Set2_Puntos_Equipo2) {
        CantidadEquipo1++;
    } else {
        CantidadEquipo2++;
    }

    if (Partido.Set3_Puntos_Equipo1 > Partido.Set3_Puntos_Equipo2) {
        CantidadEquipo1++;
    } else {
        CantidadEquipo2++;
    }

    if (Partido.Equipo1Jugador1 == JugadorID || Partido.Equipo1Jugador2 == JugadorID) {
        
        return (CantidadEquipo1 > CantidadEquipo2);

    } else if (Partido.Equipo2Jugador1 == JugadorID || Partido.Equipo2Jugador2 == JugadorID) {

        return (CantidadEquipo2 > CantidadEquipo1);

    }

    return false;

}


function ObtenerCantidadGamesGanadosPartidoEquipo(Partido, Jugador1ID, Jugador2ID) {

    if (EsEquipo1(Partido, Jugador1ID, Jugador2ID)) {
        return Partido.Set1_Puntos_Equipo1 + Partido.Set2_Puntos_Equipo1 + Partido.Set3_Puntos_Equipo1
    } else if (EsEquipo2(Partido, Jugador1ID, Jugador2ID)) {
        return Partido.Set1_Puntos_Equipo2 + Partido.Set2_Puntos_Equipo2 + Partido.Set3_Puntos_Equipo2
    } else {
        return 0;
    }

}

function ObtenerCantidadSetsGanadosPartidoEquipo(Partido, Jugador1ID, Jugador2ID) {

    var Cantidad = 0;

    if (EsEquipo1(Partido,Jugador1ID, Jugador2ID)) {

        if (Partido.Set1_Puntos_Equipo1 > Partido.Set1_Puntos_Equipo2) {
            Cantidad++;
        }

        if (Partido.Set2_Puntos_Equipo1 > Partido.Set2_Puntos_Equipo2) {
            Cantidad++;
        }

        if (Partido.Set3_Puntos_Equipo1 > Partido.Set3_Puntos_Equipo2) {
            Cantidad++;
        }

    } if (EsEquipo2(Partido, Jugador1ID, Jugador2ID)) {

        if (Partido.Set1_Puntos_Equipo2 > Partido.Set1_Puntos_Equipo1) {
            Cantidad++;
        }

        if (Partido.Set2_Puntos_Equipo2 > Partido.Set2_Puntos_Equipo1) {
            Cantidad++;
        }

        if (Partido.Set3_Puntos_Equipo2 > Partido.Set3_Puntos_Equipo1) {
            Cantidad++;
        }

    }

    return Cantidad;

}

function EquipoGanoPartido(Partido, Jugador1ID, Jugador2ID) {

    var CantidadEquipo1 = 0;
    var CantidadEquipo2 = 0;

    if (Partido.Set1_Puntos_Equipo1 > Partido.Set1_Puntos_Equipo2) {
        CantidadEquipo1++;
    } else {
        CantidadEquipo2++;
    }

    if (Partido.Set2_Puntos_Equipo1 > Partido.Set2_Puntos_Equipo2) {
        CantidadEquipo1++;
    } else {
        CantidadEquipo2++;
    }

    if (Partido.Set3_Puntos_Equipo1 > Partido.Set3_Puntos_Equipo2) {
        CantidadEquipo1++;
    } else {
        CantidadEquipo2++;
    }

    if (EsEquipo1(Partido,Jugador1ID,Jugador2ID)) {

        return (CantidadEquipo1 > CantidadEquipo2);

    } else if (EsEquipo2(Partido, Jugador1ID, Jugador2ID)) {

        return (CantidadEquipo2 > CantidadEquipo1);

    }

    return false;

}

function JugadorJugoPartido(Partido, JugadorID) {
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

function EquipoJugoPartido(Partido, Jugador1ID, Jugador2ID) {

    if (
        (Partido.Equipo1Jugador1 == Jugador1ID && Partido.Equipo1Jugador2 == Jugador2ID)
        ||
        (Partido.Equipo1Jugador1 == Jugador2ID && Partido.Equipo1Jugador2 == Jugador1ID)
        ||
        (Partido.Equipo2Jugador1 == Jugador1ID && Partido.Equipo2Jugador2 == Jugador2ID)
        ||
        (Partido.Equipo2Jugador1 == Jugador2ID && Partido.Equipo2Jugador2 == Jugador1ID)
    ) {
        return true;
    } else {
        return false;
    }

    /*return (JugadorJugoPartido(Partido, Jugador1ID) && JugadorJugoPartido(Partido, Jugador2ID));*/

}

function EsEquipo1(Partido, Jugador1ID, Jugador2ID) {

    return ((Partido.Equipo1Jugador1 == Jugador1ID && Partido.Equipo1Jugador2 == Jugador2ID) || (Partido.Equipo1Jugador1 == Jugador2ID && Partido.Equipo1Jugador2 == Jugador1ID));    

}

function EsEquipo2(Partido, Jugador1ID, Jugador2ID) {

    return ((Partido.Equipo2Jugador1 == Jugador1ID && Partido.Equipo2Jugador2 == Jugador2ID) || (Partido.Equipo2Jugador1 == Jugador2ID && Partido.Equipo2Jugador2 == Jugador1ID));

}