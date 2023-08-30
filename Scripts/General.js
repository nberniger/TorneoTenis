

function Inicializar() {

    InicializarJugadores();
    InicializarTorneos();

}


function SeleccionarTab(divTab, divContenido) {

    divTabTorneos.className = 'Tab';
    divTabJugadores.className = 'Tab';

    divTorneos.style.display = 'none';
    divJugadores.style.display = 'none';

    divTab.className = 'TabSeleccionado';
    divContenido.style.display = 'block';


}