

function Inicializar() {


    InicializarJugadores();
    InicializarTorneos();
    

    MostrarJugadores();
    MostrarEquipos();
}


function SeleccionarTab(divTab, divContenido) {

    divTabTorneos.className = 'Tab';
    divTabJugadores.className = 'Tab';
    divTabEquipos.className = 'Tab';

    divTorneos.style.display = 'none';
    divJugadores.style.display = 'none';
    divEquipos.style.display = 'none';

    divTab.className = 'TabSeleccionado';
    divContenido.style.display = 'block';


}