var Jugadores = [];

function InicializarJugadores() {

    var Jugador1 = {};
    Jugador1.ID = 1;
    Jugador1.Nombre = 'Nicolas Berniger';
    Jugadores.push(Jugador1);

    var Jugador2 = {};
    Jugador2.ID = 2;
    Jugador2.Nombre = 'Alberto';
    Jugadores.push(Jugador2);

    var Jugador3 = {};
    Jugador3.ID = 3;
    Jugador3.Nombre = 'Leo';
    Jugadores.push(Jugador3);

    var Jugador4 = {};
    Jugador4.ID = 4;
    Jugador4.Nombre = 'Sebastian Padin';
    Jugadores.push(Jugador4);

    var Jugador5 = {};
    Jugador5.ID = 5;
    Jugador5.Nombre = 'Marcelo Agulleiro';
    Jugadores.push(Jugador5);

    var Jugador6 = {};
    Jugador6.ID = 6;
    Jugador6.Nombre = 'Marcelo Alignani';
    Jugadores.push(Jugador6);

    var Jugador7 = {};
    Jugador7.ID = 7;
    Jugador7.Nombre = 'Marcelo Gelvez';
    Jugadores.push(Jugador7);

    MostrarJugadores();

}

function MostrarJugadores() {


    for (var i = 0; i < Jugadores.length; i++) {

        var divJugador = document.createElement('div');

        divJugador.innerHTML = document.getElementById('divPlantillaJugador').innerHTML;

        divJugador.innerHTML = divJugador.innerHTML.replace('@@Nombre@@', Jugadores[i].Nombre);

        divJugadores.appendChild(divJugador);

    }

}