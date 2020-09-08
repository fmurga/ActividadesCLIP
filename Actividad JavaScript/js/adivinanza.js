var adivinanza = 'Si las dejamos se pasan, si las vendemos se pesan, si se hacen vino se pisan,si las dejamos se posan.';
var respuestas1 = 'UVAS';
var alerta = document.getElementById("alerta");
var pista = document.getElementById("pista");
var contar = 4;
document.getElementById("intento").innerHTML = contar;
document.getElementById("adivinanza").innerHTML = adivinanza;
document.getElementById('nuevo').style.visibility = "hidden";
var respuesta = document.getElementById('answer');

function responder() {
    event.preventDefault()
    var resp = respuesta.value.toUpperCase();
    if (respuestas1 == resp) {
        alerta.innerHTML = '<div class="alert alert-success" id="alert" style="width:70%;margin-left:15%" role="alert">CORRECTO! FELICITACIONES!</div>';
    } else {
        contar--;
        switch (contar) {
            case 3:
                alerta.innerHTML = '<div class="alert alert-warning" id="alert" style="width:70%;margin-left:15%" role="alert">INCORRECTO! INTENTE NUEVAMENTE!</div>';
                document.getElementById("intento").innerHTML = contar;
                break;
            case 2:
                alerta.innerHTML = '<div class="alert alert-warning" id="alert" style="width:70%;margin-left:15%" role="alert">INCORRECTO! INTENTE NUEVAMENTE!</div>';
                pista.innerHTML = '<div class="alert alert-info" id="alert" style="width:70%;margin-left:15%" role="alert">Pista Es color morada</div>'
                document.getElementById("intento").innerHTML = contar;
                break;
            case 1:
                alerta.innerHTML = '<div class="alert alert-warning" id="alert" style="width:70%;margin-left:15%" role="alert">INCORRECTO! INTENTE NUEVAMENTE!</div>';
                pista.innerHTML = '<div class="alert alert-info" id="alert" style="width:70%;margin-left:15%" role="alert">Pista es redonda</div>'
                document.getElementById("intento").innerHTML = contar;
                break;
            case 0:
                alerta.innerHTML = '<div class="alert alert-danger" id="alert" style="width:70%;margin-left:15%" role="alert">NO TIENE MAS INTENTOS</div>';
                pista.innerHTML = ''
                document.getElementById("intento").innerHTML = contar;
                document.getElementById('nuevo').style.visibility = "visible";
                break;
        }
    }
}

function intentardenuevo(){
    contar = 4;
    alerta.innerHTML = '';
    document.getElementById("intento").innerHTML = contar;
    document.getElementById('nuevo').style.visibility = "hidden";
}