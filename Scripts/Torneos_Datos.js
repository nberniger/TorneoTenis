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
    //Torneo2.JugadoresZona1 = [7, 10, 1, 8, 4, 5];
    //Torneo2.JugadoresZona2 = [11, 12, 3, 2, 13, 6];
    Torneo2.EquiposZona1 = [{ Jugador1: 7, Jugador2: 10, Zona: 1 }, { Jugador1: 1, Jugador2: 8, Zona: 1 }, { Jugador1: 4, Jugador2: 5, Zona: 1 }];
    /*Torneo2.EquiposZona2 = [{ Jugador1: 11, Jugador2: 14, Zona: 2 }, { Jugador1: 3, Jugador2: 2, Zona: 2 }, { Jugador1: 13, Jugador2: 6, Zona: 2 }];*/
    Torneo2.EquiposZona2 = [{ Jugador1: 11, Jugador2: 14, Zona: 2 }, { Jugador1: 3, Jugador2: 2, Zona: 2 }, { Jugador1: 15, Jugador2: 6, Zona: 2 }, { Jugador1: 13, Jugador2: 6, Zona: 2 }];
    Torneo2.Finalizado = false;
    Torneos.push(Torneo2);

    Torneo2.Partidos = [];

    

    var Partido1 = {};
    Partido1.Fase = 'Zona 2';
    Partido1.Fecha = 'Jueves 14/09/2023 20:00 - Cancha 4';
    Partido1.Equipo1Jugador1 = 13;
    Partido1.Equipo1Jugador2 = 6;
    Partido1.Equipo2Jugador1 = 3;
    Partido1.Equipo2Jugador2 = 2;
    Partido1.Set1_Puntos_Equipo1 = 1;
    Partido1.Set1_Puntos_Equipo2 = 6;
    Partido1.Set2_Puntos_Equipo1 = 1;
    Partido1.Set2_Puntos_Equipo2 = 6;
    Partido1.Set3_Puntos_Equipo1 = 0;
    Partido1.Set3_Puntos_Equipo2 = 0;
    Torneo2.Partidos.push(Partido1);

   

    var Partido2 = {};
    Partido2.Fase = 'Zona 1';
    Partido2.Fecha = 'Sabado 16/09/2023 10:00 - Cancha 2';
    Partido2.Equipo1Jugador1 = 7;
    Partido2.Equipo1Jugador2 = 10;
    Partido2.Equipo2Jugador1 = 5;
    Partido2.Equipo2Jugador2 = 4;
    Partido2.Set1_Puntos_Equipo1 = 0;
    Partido2.Set1_Puntos_Equipo2 = 0;
    Partido2.Set2_Puntos_Equipo1 = 0;
    Partido2.Set2_Puntos_Equipo2 = 0;
    Partido2.Set3_Puntos_Equipo1 = 0;
    Partido2.Set3_Puntos_Equipo2 = 0;
    Torneo2.Partidos.push(Partido2);

    var Partido3 = {};
    Partido3.Fase = 'Zona 2';
    Partido3.Fecha = 'Miercoles 20/09/2023 20:00';
    Partido3.Equipo1Jugador1 = 2;
    Partido3.Equipo1Jugador2 = 3;
    Partido3.Equipo2Jugador1 = 11;
    Partido3.Equipo2Jugador2 = 14;
    Partido3.Set1_Puntos_Equipo1 = 0;
    Partido3.Set1_Puntos_Equipo2 = 0;
    Partido3.Set2_Puntos_Equipo1 = 0;
    Partido3.Set2_Puntos_Equipo2 = 0;
    Partido3.Set3_Puntos_Equipo1 = 0;
    Partido3.Set3_Puntos_Equipo2 = 0;
    Torneo2.Partidos.push(Partido3);

    var Partido4 = {};
    Partido4.Fase = 'Zona 2';
    Partido4.Fecha = 'Jueves 21/09/2023 19:00';
    Partido4.Equipo1Jugador1 = 6;
    Partido4.Equipo1Jugador2 = 15;
    Partido4.Equipo2Jugador1 = 11;
    Partido4.Equipo2Jugador2 = 14;
    Partido4.Set1_Puntos_Equipo1 = 0;
    Partido4.Set1_Puntos_Equipo2 = 0;
    Partido4.Set2_Puntos_Equipo1 = 0;
    Partido4.Set2_Puntos_Equipo2 = 0;
    Partido4.Set3_Puntos_Equipo1 = 0;
    Partido4.Set3_Puntos_Equipo2 = 0;
    Torneo2.Partidos.push(Partido4);

    

   


}

function InicializarTorneo1() {

    var Torneo1 = {};
    Torneo1.ID = 1;
    Torneo1.Nombre = 'Torneo 1';
    Torneo1.Finalizado = true;
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

