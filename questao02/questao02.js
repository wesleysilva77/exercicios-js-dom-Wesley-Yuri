function mudarForma() {
    estiloDiv = document.getElementById("forma")
    btn = document.getElementById("btn-forma")
    btnText = document.getElementById("btn-forma").innerText

    if (btnText == "Mudar Forma") {
        estiloDiv.style = "width: 200px; height: 200px; background-color: red;border-radius: 0%; transition: ease-in-out 400ms;"
        btn.innerText = "Retornar a Forma Original."

    } else if (btnText == "Retornar a Forma Original.") {
        estiloDiv.style = "width: 200px; height: 200px; background-color: red; border-radius: 50%; transition: ease-in-out 400ms;"
        btn.innerText = "Mudar Forma"
    }
}