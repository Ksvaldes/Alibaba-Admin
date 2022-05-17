//LIBRERÍA DEL USUARIO

import {user} from "./user.js/index.js";


//VERIFICACIÓN

export function login (username){

    for(let i =0; i <=6; i++){
        if (user [i][1] === username){
            console.log("Acceso con nombre de usuario");
        }else if(user [i][5] === username){
            console.log("true email");
        }else {
            console.log("user false")
        }

    }

}