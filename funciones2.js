
const usuario1 = document.getElementById('usuario-1') ;
const usuario2 = document.getElementById('usuario-2') ;
const usuario3 = document.getElementById('usuario-3') ;
const usuario4 = document.getElementById('usuario-4') ;


function agregarUsuario1() {
    document.getElementById('usuario-1').style.display = 'block' ;
    usuario1.className = "usuario usuario-1 usuario1" ;
    document.getElementById('usuario-4').style.margin = '0%' ;
}

function agregarUsuario2() {
    document.getElementById('usuario-2').style.display = 'block' ;
    usuario1.className = "usuario usuario-1" ;
    usuario2.className = "usuario usuario-2 usuario2" ;
    document.getElementById('usuario-4').style.margin = '0%' ;
}

function agregarUsuario3() {
    document.getElementById('usuario-3').style.display = 'block' ;
    usuario1.className = "usuario usuario-1" ;
    usuario2.className = "usuario usuario-2" ;
    usuario3.className = "usuario usuario-3 usuario3" ;
    document.getElementById('usuario-4').style.margin = '0%' ;
}

function agregarUsuario4() {
    document.getElementById('usuario-1').style.display = 'block' ;
    usuario1.className = "usuario usuario-1" ;
    usuario2.className = "usuario usuario-2" ;
    usuario3.className = "usuario usuario-3" ;
    usuario3.className = "usuario usuario-4 usuario4" ;
    document.getElementById('usuario-4').style.margin = '0%' ;
}



function borrarUsuario1() {
    document.getElementById('usuario-1').style.display = 'none' ;
}

function borrarUsuario2() {
    document.getElementById('usuario-2').style.display = 'none' ;
}

function borrarUsuario3() {
    document.getElementById('usuario-3').style.display = 'none' ;
}

