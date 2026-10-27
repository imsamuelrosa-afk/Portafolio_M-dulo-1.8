function init() {
    //prompt() permite obtener entrada de datos del usuario
    var presupuesto = prompt('Ingrese el presupuesto del proyecto','');
    var derma, trau, pedi, i;
    var div = document.getElementById('distribucion');
    // Realizacion de los calculos de distribucion del presupuesto
    derma = presupuesto * 0.4;
    trau = presupuesto * 0.35;
    pedi = presupuesto * 0.25;

    // Creando el codigo que se insertara en el div
    var html = "<ul>\n";
    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>El presupuesto asignado para Dermatologia es: $" + derma + "</a>\n";
    html += "\t</li>\n";
    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>El presupuesto asignado para Traumatologia es: $" + trau + "</a>\n";
    html += "\t</li>\n";
    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>El presupuesto asignado para Pediatria es: $" + pedi + "</a>\n";
    html += "\t</li>\n";
    html += "</ul>\n";
    // Insertando el codigo en el div
    div.innerHTML = html;
    // Hacer referencia a los elementos de la lista y agregarles un evento click
    var links = document.getElementsByTagName('a');
    for (i = 0; i < links.length; i++) {
        links[i].onmouseover = function () {
            this.className = 'move-right-hover';
        };
        links[i].onmouseout = function () {
            this.className = 'move-right';
        };
    }
}
window.onload = init;