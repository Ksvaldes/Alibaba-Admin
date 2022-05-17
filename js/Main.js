// LIBRERÍA

import {login} from "./login.js"

function recuperar_dato (e){
    e.preventDefalut();

    var username = document.querySelection("#username").value;
    var password = document.querySelector("#password").value;

    // LOGIN
    login(username,password);
}

//BOTON

var bt_entrar = document.querySelector("#login");
bt_entrar.addEventListener('submit', recuperar_datos);

