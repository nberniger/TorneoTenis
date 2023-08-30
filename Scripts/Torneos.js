var Torneos = [];
var Partidos = [];

function InicializarTorneos() {


    InicializarTorneo1();

    MostrarTorneos();

}

function InicializarTorneo1() {

    var Torneo1 = {};
    Torneo1.Nombre = 'Torneo 1';
    Torneos.push(Torneo1);

    Torneo1.Partidos = [];
    
    var Partido1 = {};
    Partido1.Jugador1Equipo1 = 1;
    Partido1.Jugador2Equipo1 = 2;
    Partido1.Jugador1Equipo2 = 3;
    Partido1.Jugador2Equipo2 = 4;
    Partido1.Set1_Puntos_Equipo1 = 0;
    Partido1.Set1_Puntos_Equipo2 = 0;
    Partido1.Set2_Puntos_Equipo1 = 0;
    Partido1.Set2_Puntos_Equipo2 = 0;
    Partido1.Set3_Puntos_Equipo1 = 0;
    Partido1.Set3_Puntos_Equipo2 = 0;
    Torneo1.Partidos.push(Partido1);

    var Partido2 = {};
    Partido2.Jugador1Equipo1 = 5;
    Partido2.Jugador2Equipo1 = 6;
    Partido2.Jugador1Equipo2 = 7;
    Partido2.Jugador2Equipo2 = 8;
    Partido2.Set1_Puntos_Equipo1 = 0;
    Partido2.Set1_Puntos_Equipo2 = 0;
    Partido2.Set2_Puntos_Equipo1 = 0;
    Partido2.Set2_Puntos_Equipo2 = 0;
    Partido2.Set3_Puntos_Equipo1 = 0;
    Partido2.Set3_Puntos_Equipo2 = 0;
    Torneo1.Partidos.push(Partido2);

    var Partido3 = {};
    Partido3.Jugador1Equipo1 = 0;
    Partido3.Jugador2Equipo1 = 0;
    Partido3.Jugador1Equipo2 = 0;
    Partido3.Jugador2Equipo2 = 0;
    Partido3.Set1_Puntos_Equipo1 = 0;
    Partido3.Set1_Puntos_Equipo2 = 0;
    Partido3.Set2_Puntos_Equipo1 = 0;
    Partido3.Set2_Puntos_Equipo2 = 0;
    Partido3.Set3_Puntos_Equipo1 = 0;
    Partido3.Set3_Puntos_Equipo2 = 0;
    Torneo1.Partidos.push(Partido3);

    

}

function MostrarTorneos() {

    for (var i = 0; i < Torneos.length; i++) {

        var divTorneo = document.createElement('div');

        divTorneo.innerHTML = document.getElementById('divPlantillaTorneo').innerHTML;

        divTorneo.innerHTML = divTorneo.innerHTML.replace('@@Nombre@@', Torneos[i].Nombre);

        tdListaTorneos.appendChild(divTorneo);

    }

}    