var adivinanzas = ["Si las dejamos se pasan, si las vendemos se pesan, si se hacen vino se pisan,si las dejamos se posan.",
    "Soy blanco, soy tinto,de color todo lo pinto,estoy en la buena mesa y me subo a la cabeza.",
    "Una vieja jorobada, con un hijo enredador, con muchas niñas bonitas y un nieto predicador."
];
var respuestas = [["Uva", "La Uva", "Uvas"],["Vino", "El Vino"],["La parra","vid", "La vid", "parra"]];
var res = document.getElementById('answer')
/* document.getElementById("reinicia").style.visibility = "hidden"; */
var inidice_aleatorio = Math.floor(Math.random() * adivinanzas.length);
document.getElementById("adivinanza").innerHTML = adivinanzas[inidice_aleatorio];
function Adiv(){
    event.preventDefault()
    var inidice_aleatorio = Math.floor(Math.random() * adivinanzas.length);
    document.getElementById("adivinanza").innerHTML = adivinanzas[inidice_aleatorio];
    adivinanzas.splice(inidice_aleatorio, 1);
    if(adivinanzas.length == 0){
        document.getElementById("adivinanza").innerHTML = 'No tenemos más Adivinanzas para ti';
        document.getElementById("nueva").style.visibility = "hidden";
        document.getElementById("reinicia").style.visibility = "visible";
    }
}

function responder(){
    event.preventDefault()
    var resUsu = res.value;
    if(resUsu in respuestas){
        alert.innerHTML = '<div class="alert alert-success" id="alert" style="width:70%;margin-left:15%" role="alert">CORRECTO! FELICITACIONES!</div>'
    }
}

/* function reiniciar(){
    var adivinanzas = ["Si las dejamos se pasan, si las vendemos se pesan, si se hacen vino se pisan,si las dejamos se posan.",
        "Soy blanco, soy tinto,de color todo lo pinto,estoy en la buena mesa y me subo a la cabeza.",
        "Una vieja jorobada, con un hijo enredador, con muchas niñas bonitas y un nieto predicador."
    ];
    document.getElementById("reinicia").style.visibility = "hidden";
    var inidice_aleatorio = Math.floor(Math.random() * adivinanzas.length);
    alert(adivinanzas.length)
    document.getElementById("adivinanza").innerHTML = adivinanzas[inidice_aleatorio];
    document.getElementById("nueva").style.visibility = "visible";
} */

