function init(){
    //prompt() permite obtener entrada de datos del usuario
    var presupuesto = prompt("Ingrese el presupuesto del proyecto");
    var derma,trau,pedi,i;
    var div= document.getElementById("distribucion");
    // Realizacion de los calculos de distribucion del presupuesto
    derma = presupuesto * 0.4;
    trau = presupuesto * 0.35;
    pedi = presupuesto * 0.25;

    //Creando el codigo que se insertara en el div
    var html ="<ul>\n\t<li>\n";
    html += "\t\t<a href='#' class='move-right'\n";
    html *="\t\t\t>El presupuesto asignado para dermatologia es: $" + derma +"\n"
    }