var btnMenuOpen = document.getElementById("btn-menu-open");
var menuLateral = document.getElementById("menu-lateral");
var btnMenuClose = document.getElementById("btn-menu-close");
var btnNavToggle = document.getElementById("btn-nav-toggle");
var navLinks = document.getElementById("nav-links");

btnMenuOpen.addEventListener("click", mostrarMenuLateral);
btnMenuClose.addEventListener("click",ocultarMenuLateral) ;
btnNavToggle.addEventListener("click", toggleNavLinks);
window.addEventListener("resize", arreglarNavLinks);

function mostrarMenuLateral(){
    menuLateral.classList.add("mostrar");
}
function ocultarMenuLateral(){
    menuLateral.classList.remove("mostrar");
}

function toggleNavLinks(){
    navLinks.classList.toggle("mostrar");

}

function arreglarNavLinks(){
    if(window.innerWidth >= 900){
        navLinks.classList.remove("mostrar");
    }
}

function cargarDatos(){
    var datos = [
        {url: "//unal.edu.co", nombre:"UNAL", instruccion: "Instruccion UNAL"},  /* el // determina si el url es http o https*/
        {url: "//css-trick.com", nombre:"CSS-Tricks", instruccion: "Instruccion CSS-Tricks"},
        {url: "assets/uploads/actividades/actividad-normal/index.html", nombre:"Determinar operacion", instruccion: "Fijate en los numeros y selecciona el operador correcto"},
        {url: "assets/uploads/actividades/actividad-canvas/index.html", nombre:"Actividad Canvas", instruccion: "actividad"}
    ];
    return datos;
}

function generarLinks(){
    var menuLinks = document.getElementById("menu-links");
    menuLinks.innerHTML = "";

    var links = cargarDatos();
    if(links.length > 0){
        for(var i=0; i < links.length; i++){
            var texto = document.createTextNode(links[i].nombre);

            var link = document.createElement("a");
            link.href = links[i].url;  /*desde js puedo modificar elemento html */
            link.target = "main-iframe";  //abre el link de las paginas en donde indique entre comillas
            link.appendChild(texto);

            var itemLista = document.createElement("li");
            itemLista.appendChild(link);

            menuLinks.appendChild(itemLista);
        }
    }else{
        var  texto = document.createTextNode("No se ha encontrado ninguna actividad");
        var itemLista = document.createElement("li");
        itemLista.appendChild(texto);

        menuLinks.appendChild(itemLista);
    }
}
generarLinks();