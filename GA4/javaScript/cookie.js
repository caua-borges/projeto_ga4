window.onload = function() {
    checkCookie();
}

function checkCookie() {
    var usuario = getCookie("usuario");
    if(usuario != "") {
        alert("Bem vindo " + usuario + "!");
    } else {
        usuario = prompt("Por favor, digite o seu nome: ");
        if((usuario != "") && (usuario != null)) {
            setCookie("usuario", usuario, 365);
        }
    }
}

function setCookie(chave,valor,validadeDias) {
    var validade = new Date();
    validade.setTime(validade.getTime() + validadeDias*24*60*60*1000);
    var validadeUTC = "expires=" + validade.toUTCString();
    document.cookie = chave + "=" + valor + ";" + validadeUTC + ":path=/";
}

function getCookie(chave) {
    var chaveIgual = chave + "=";
    var pares = document.cookie.split(";");
    for (let i = 0; i < pares.length; i++) {
        var par = pares[i];
        while(par.charAt(0) == " ") {
            par = par.substring(1);
        }
        if(par.indexOf(chaveIgual) == 0) {
            return par.substring(chaveIgual.length);
        }
    }
    return "";
}