



function SeleccionarTabGenerico(divTab, divContenido,divsTabs, divsContenido) {

    for (var i = 0; i < divsTabs.length; i++) {
        divsTabs[i].className = 'Tab';        
    }

    for (var i = 0; i < divsContenido.length; i++) {
        divsContenido[i].style.display = 'none';
    }    

    divTab.className = 'TabSeleccionado';
    divContenido.style.display = 'block';


}