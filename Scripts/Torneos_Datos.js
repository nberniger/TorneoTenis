var Torneos = [];
var Partidos = [];

function InicializarTorneos() {


    InicializarTorneo2();
    InicializarTorneo1();
    
    

    MostrarTorneos();

}

function InicializarTorneo2() {

    var Torneo2 = {};
    Torneo2.ID = 2;
    Torneo2.Nombre = 'Torneo 2';
    Torneo2.JugadoresZona1 = [7, 10, 1, 8, 4, 5];
    Torneo2.JugadoresZona2 = [11, 12, 3, 2, 13, 6];
    Torneo2.Equipos = [{Jugador1=7,Jugador2=10}]
    Torneos.push(Torneo2);

    Torneo2.Partidos = [];

    


}

function InicializarTorneo1() {

    var Torneo1 = {};
    Torneo1.ID = 1;
    Torneo1.Nombre = 'Torneo 1';
    Torneos.push(Torneo1);

    Torneo1.Partidos = [];
    
    var Partido1 = {};    
    Partido1.Fase = 'Semifinal';
    Partido1.Fecha = 'Martes 05/09/2023 19:00 - Cancha 4';
    Partido1.Equipo1Jugador1 = 1;
    Partido1.Equipo1Jugador2 = 5;
    Partido1.Equipo2Jugador1 = 6;
    Partido1.Equipo2Jugador2 = 4;
    Partido1.Set1_Puntos_Equipo1 = 6;
    Partido1.Set1_Puntos_Equipo2 = 3;
    Partido1.Set2_Puntos_Equipo1 = 4;
    Partido1.Set2_Puntos_Equipo2 = 6;
    Partido1.Set3_Puntos_Equipo1 = 10;
    Partido1.Set3_Puntos_Equipo2 = 7;
    Torneo1.Partidos.push(Partido1);

    var Partido2 = {};
    Partido2.Fase = 'Semifinal';
    Partido2.Fecha = 'Martes 05/09/2023 19:00 - Cancha 6'
    Partido2.Equipo1Jugador1 = 7;
    Partido2.Equipo1Jugador2 = 3;
    Partido2.Equipo2Jugador1 = 8;
    Partido2.Equipo2Jugador2 = 9;
    Partido2.Set1_Puntos_Equipo1 = 6;
    Partido2.Set1_Puntos_Equipo2 = 4;
    Partido2.Set2_Puntos_Equipo1 = 5;
    Partido2.Set2_Puntos_Equipo2 = 7;
    Partido2.Set3_Puntos_Equipo1 = 10;
    Partido2.Set3_Puntos_Equipo2 = 6;
    Torneo1.Partidos.push(Partido2);

    var Partido3 = {};
    Partido3.Fase = 'Final';
    Partido3.Fecha = 'Sabado 09/09/2023 10:00 - Cancha 4'
    Partido3.Equipo1Jugador1 = 7;
    Partido3.Equipo1Jugador2 = 3;
    Partido3.Equipo2Jugador1 = 1;
    Partido3.Equipo2Jugador2 = 5;
    Partido3.Set1_Puntos_Equipo1 = 5;
    Partido3.Set1_Puntos_Equipo2 = 7;
    Partido3.Set2_Puntos_Equipo1 = 6;
    Partido3.Set2_Puntos_Equipo2 = 4;
    Partido3.Set3_Puntos_Equipo1 = 10;
    Partido3.Set3_Puntos_Equipo2 = 4;
    Torneo1.Partidos.push(Partido3);    
    

}

