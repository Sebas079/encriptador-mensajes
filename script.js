// obtener mensaje
/*const mensajeUsuario = document.getElementsByClassName(".mensajeUsuario").value;
const btnEncriptar = document.querySelectorAll("#btn-encriptar");
const btnDesencriptar = document.querySelectorAll("#btn-Desencriptar");
const btncopiar = document.querySelectorAll("#btn-copiar");
const salidaMensaje = document.getElementsByClassName(".salidaMensaje");
console.log(mensajeUsuario);*/
//validar mensaje



/*function validarMensaje() {
    if (mensajeUsuario.value == /(A-Z 0-9 ´)/gi) {
        return alert("Mensaje invalido solo minusculas sin acento!!");
    }
}*/

// encriptar mensaje
/*function encriptarMensaje() {
    // validarMensaje();
    const msj = mensajeUsuario.value;
    const msjEncrip = msj.replace(/a/gi, "ei").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    salidaMensaje.value = msjEncrip;
    mensajeUsuario.value =" ";

};
function encriptar(){
    const encriptar = document.getElementById('entrada_texto').value;
    const encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("salidaMensaje").value = encriptado
    document.getElementById("mensajeUsuario").value=" ";
}

//Desencriptar mensaje
/*function desencriptarMensaje() {
    let msjDesenc = mensajeUsuario.value;
    let resultado = msjDesenc.replace(/ei/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    salidaMensaje.value = r;

}*/


function encriptarMensaje(){
    const encriptar = document.getElementById('entrada_texto').value;
    const encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("salida_texto").value = encriptado
    document.getElementById("entrada_texto").value=" ";
}


function desencriptarMansaje(){
    const desencriptar= document.getElementById ("entrada_texto").value;
    const desencriptado= desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("salida_texto").value = desencriptado
    document.getElementById("entrada_texto").value=" ";
}
