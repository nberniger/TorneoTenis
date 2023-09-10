

function MostrarTorneos() {

    for (var i = 0; i < Torneos.length; i++) {

        var divTorneo = document.createElement('div');
        divTorneo.id = 'divTorneo' + Torneos[i].ID;
        divTorneo.innerHTML = divPlantillaTorneo.innerHTML;
        divTorneo.innerHTML = divTorneo.innerHTML.replace('@@Nombre@@', Torneos[i].Nombre);
        divTorneo.onclick = function () { SeleccionarTorneo(this.id.replace('divTorneo','')); }
        tdListaTorneos.appendChild(divTorneo);

        var divDetalleTorneo = document.createElement('div');
        divDetalleTorneo.id = 'divDetalleTorneo' + Torneos[i].ID;
        divDetalleTorneo.style.display = 'none';
        tdTorneoSeleccionado.appendChild(divDetalleTorneo);

        var divTabsTorneo = document.createElement('div');
        divTabsTorneo.className = 'Tabs';        

        var divTabPartidosTorneo = document.createElement('div');
        divTabPartidosTorneo.id = 'TabPartidosTorneo' + Torneos[i].ID;
        divTabPartidosTorneo.innerHTML = 'Partidos';
        divTabPartidosTorneo.className = 'TabSeleccionado';        
        divTabsTorneo.appendChild(divTabPartidosTorneo);

        var divTabCuadroTorneo = document.createElement('div');
        divTabCuadroTorneo.id = 'TabCuadroTorneo' + Torneos[i].ID;
        divTabCuadroTorneo.innerHTML = 'Cuadro';
        divTabCuadroTorneo.className = 'Tab';
        divTabsTorneo.appendChild(divTabCuadroTorneo);

       

        var divPartidosTorneo = document.createElement('div');
        divPartidosTorneo.id = 'divPartidosTorneo' + Torneos[i].ID;

        var divCuadroTorneo = document.createElement('div');
        divCuadroTorneo.id = 'divCuadroTorneo' + Torneos[i].ID;        
        divCuadroTorneo.style.display = 'none';
        divTabPartidosTorneo.onclick = function () { SeleccionarTabPartidosTorneo(this.id.replace('TabPartidosTorneo','')) };
        divTabCuadroTorneo.onclick = function () { SeleccionarTabCuadroTorneo(this.id.replace('TabCuadroTorneo', '')) };

        divDetalleTorneo.appendChild(divTabsTorneo);

        for (var j = Torneos[i].Partidos.length - 1; j >= 0; j--) {

            var divPartidoTorneo = document.createElement('div');
            divPartidoTorneo.id = 'divDetalleTorneo' + Torneos[i].ID;
            divPartidoTorneo.style.margin = '8px';
            divPartidoTorneo.innerHTML = divPlantillaPartido.innerHTML;
            divPartidoTorneo.innerHTML = divPartidoTorneo.innerHTML.replace('@@Fase@@', Torneos[i].Partidos[j].Fase);
            divPartidoTorneo.innerHTML = divPartidoTorneo.innerHTML.replace('@@Fecha@@', Torneos[i].Partidos[j].Fecha);

            divPartidoTorneo.innerHTML = divPartidoTorneo.innerHTML.replace('@@Equipo1Jugador1@@', ObtenerNombreJugador(Torneos[i].Partidos[j].Equipo1Jugador1));
            divPartidoTorneo.innerHTML = divPartidoTorneo.innerHTML.replace('@@Equipo1Jugador2@@', ObtenerNombreJugador(Torneos[i].Partidos[j].Equipo1Jugador2));
            divPartidoTorneo.innerHTML = divPartidoTorneo.innerHTML.replace('@@Equipo2Jugador1@@', ObtenerNombreJugador(Torneos[i].Partidos[j].Equipo2Jugador1));
            divPartidoTorneo.innerHTML = divPartidoTorneo.innerHTML.replace('@@Equipo2Jugador2@@', ObtenerNombreJugador(Torneos[i].Partidos[j].Equipo2Jugador2));

            divPartidoTorneo.innerHTML = divPartidoTorneo.innerHTML.replace('@@Set1PuntosEquipo1@@', Torneos[i].Partidos[j].Set1_Puntos_Equipo1);
            divPartidoTorneo.innerHTML = divPartidoTorneo.innerHTML.replace('@@Set2PuntosEquipo1@@', Torneos[i].Partidos[j].Set2_Puntos_Equipo1);
            divPartidoTorneo.innerHTML = divPartidoTorneo.innerHTML.replace('@@Set3PuntosEquipo1@@', Torneos[i].Partidos[j].Set3_Puntos_Equipo1);

            divPartidoTorneo.innerHTML = divPartidoTorneo.innerHTML.replace('@@Set1PuntosEquipo2@@', Torneos[i].Partidos[j].Set1_Puntos_Equipo2);
            divPartidoTorneo.innerHTML = divPartidoTorneo.innerHTML.replace('@@Set2PuntosEquipo2@@', Torneos[i].Partidos[j].Set2_Puntos_Equipo2);
            divPartidoTorneo.innerHTML = divPartidoTorneo.innerHTML.replace('@@Set3PuntosEquipo2@@', Torneos[i].Partidos[j].Set3_Puntos_Equipo2);

                        
            divPartidosTorneo.appendChild(divPartidoTorneo);
        }

        var Equipos = ObtenerEquiposTorneo(Torneos[i].ID);

        var EquiposZona1 = [];
        var EquiposZona2 = [];

        for (var e = 0; e < Equipos.length; e++) {
            if (Equipos[e].Zona == 1) {
                EquiposZona1.push(Equipos[e]);
            } else if (Equipos[e].Zona == 2) {
                EquiposZona2.push(Equipos[e]);
            }
        }

        if (EquiposZona1.length == 0 && EquiposZona2.length == 0) {
            MostrarCuadro(divCuadroTorneo, Equipos,Torneos[i]);
        } else {
            if (EquiposZona1.length > 0) {
                MostrarCuadro(divCuadroTorneo, EquiposZona1, Torneos[i]);
            }

            if (EquiposZona2.length > 0) {
                MostrarCuadro(divCuadroTorneo, EquiposZona2, Torneos[i]);
            }
        }
        

        

        divDetalleTorneo.appendChild(divPartidosTorneo);
        divDetalleTorneo.appendChild(divCuadroTorneo);
    }

    /*document.getElementById('divTorneo' + (Torneos[Torneos.length - 1].ID)).click();*/
    document.getElementById('divTorneo' + (Torneos[0].ID)).click();

}    

function SeleccionarTorneo(TorneoID) {

    for (var i = 0; i < Torneos.length; i++) {
        document.getElementById('divDetalleTorneo' + Torneos[i].ID).style.display = 'none';
        document.getElementById('divTorneo' + Torneos[i].ID).className = 'Torneo'
    }

    document.getElementById('divDetalleTorneo' + TorneoID).style.display = 'block';
    document.getElementById('divTorneo' + TorneoID).className = 'TorneoSeleccionado'
}

function SeleccionarTabPartidosTorneo(TorneoID) {

    document.getElementById('divPartidosTorneo' + TorneoID).style.display = 'block';
    document.getElementById('divCuadroTorneo' + TorneoID).style.display = 'none';

    document.getElementById('TabPartidosTorneo' + TorneoID).className = 'TabSeleccionado';
    document.getElementById('TabCuadroTorneo' + TorneoID).className = 'Tab';
    
}

function SeleccionarTabCuadroTorneo(TorneoID) {

    document.getElementById('divPartidosTorneo' + TorneoID).style.display = 'none';
    document.getElementById('divCuadroTorneo' + TorneoID).style.display = 'block';

    document.getElementById('TabPartidosTorneo' + TorneoID).className = 'Tab';
    document.getElementById('TabCuadroTorneo' + TorneoID).className = 'TabSeleccionado';

}

function MostrarCuadro(divCuadroTorneo,Equipos,Torneo) {

    var TablaCuadro = document.createElement('table');
    TablaCuadro.style.margin = '8px';
    TablaCuadro.cellPadding = 0;
    TablaCuadro.cellSpacing = 0;


    var ColumnasCuadro = TablaCuadro.insertRow(0);
    var ColumnaEquipo = ColumnasCuadro.insertCell(0);
    var ColumnaPartidosJugados = ColumnasCuadro.insertCell(1);
    var ColumnaGamesGanados = ColumnasCuadro.insertCell(2);
    var ColumnaSetsGanados = ColumnasCuadro.insertCell(3);
    var ColumnaPartidosGanados = ColumnasCuadro.insertCell(4);


    ColumnaEquipo.innerHTML = 'Equipo';
    ColumnaPartidosJugados.innerHTML = 'Partidos jugados';
    ColumnaGamesGanados.innerHTML = 'Games ganados';
    ColumnaSetsGanados.innerHTML = 'Sets ganados';
    ColumnaPartidosGanados.innerHTML = 'Partidos ganados';

    ColumnaEquipo.style.borderTopLeftRadius = '15px';
    ColumnaPartidosGanados.style.borderTopRightRadius = '15px';

    ColumnaEquipo.className = 'ColumnaCuadroZona';
    ColumnaPartidosJugados.className = 'ColumnaCuadroZona';
    ColumnaGamesGanados.className = 'ColumnaCuadroZona';
    ColumnaSetsGanados.className = 'ColumnaCuadroZona';
    ColumnaPartidosGanados.className = 'ColumnaCuadroZona';


    for (var e = 0; e < Equipos.length; e++) {

        var FilaEquipo = TablaCuadro.insertRow((e + 1));

        var CeldaEquipo = FilaEquipo.insertCell(0);
        var CeldaPartidosJugados = FilaEquipo.insertCell(1);
        var CeldaGamesGanados = FilaEquipo.insertCell(2);
        var CeldaSetsGanados = FilaEquipo.insertCell(3);
        var CeldaPartidosGanados = FilaEquipo.insertCell(4);

        CeldaEquipo.className = 'CeldaCuadroZona';
        CeldaPartidosJugados.className = 'CeldaCuadroZona';
        CeldaGamesGanados.className = 'CeldaCuadroZona';
        CeldaSetsGanados.className = 'CeldaCuadroZona';
        CeldaPartidosGanados.className = 'CeldaCuadroZona';

        CeldaEquipo.innerHTML = '<div>' + ObtenerNombreJugador(Equipos[e].Jugador1) + '</div>' + '<div>' + ObtenerNombreJugador(Equipos[e].Jugador2) + '</div>'
        CeldaPartidosJugados.innerHTML = ObtenerCantidadPartidosJugadosTorneoEquipo(Torneo.ID, Equipos[e]);
        CeldaGamesGanados.innerHTML = ObtenerCantidadGamesGanadosTorneoEquipo(Torneo.ID, Equipos[e]);
        CeldaSetsGanados.innerHTML = ObtenerCantidadSetsGanadosTorneoEquipo(Torneo.ID, Equipos[e]);
        CeldaPartidosGanados.innerHTML = ObtenerCantidadPartidosGanadosTorneoEquipo(Torneo.ID, Equipos[e]);
    }

    divCuadroTorneo.appendChild(TablaCuadro);

}

