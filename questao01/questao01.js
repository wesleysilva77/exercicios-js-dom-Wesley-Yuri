function inserirTitulo() {

    var valorDigitado = document.getElementById("txt-titulo").value;

    var elementoTitulo = document.getElementById("titulo");

    elementoTitulo.innerText = valorDigitado;

    elementoTitulo.style.color = "blue";
}