// encriptar mensaje
function encriptarMensaje() {

    var encriptar = document.getElementById('mensajeUsuario').value;
    
    var encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("salidaMensaje").value = encriptado;
    // document.getElementById("mensajeUsuario").value = " ";
    console.log(encriptado);



};
// desencriptar mensaje
function desencriptarMensaje() {

    var desencriptar = document.getElementById('mensajeUsuario').value;
    var desencriptado = desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("salidaMensaje").value = desencriptado;
    console.log(desencriptado);
    // document.getElementById("mensajeUsuario").value = " ";
};
//validar texto
function validarTexto() {
     
    let validar =document.getElementById('mensajeUsuario').value ;
    if (validar.toUpperCase()) {
         validar.value ="Solo letras minusculas sin acento";
         return document.getElementById("mensajeUsuario").value = validar;

    }



}





//boton encriptar

var btnEncriptar = document.querySelector("#btn-encriptar");
btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    validarTexto();
    encriptarMensaje();

});
// boton desencriptar
var btnDesencriptar = document.querySelector("#btn-desencriptar");
btnDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    desencriptarMensaje();


});
// boton copiar
var btnCopiar = document.querySelector("#btn-copiar");
btnCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    let copiar = document.getElementById("salidaMensaje");
    copiar.focus();
    document.execCommand("selectAll");
    document.execCommand("copy")

});

