function cadastrarUsuario() {   
    let nomeCompleto = document.getElementById("nome").value
    let dataNasc = document.getElementById("dataNasc").value
    let rua = document.getElementById("rua").value
    let numero = document.getElementById("numero").value
    let cidade = document.getElementById("cidade").value
    let uf = document.getElementById("uf").value
    let resultado = document.getElementById("resultado")

    resultado.style.color = "green"
    resultado.style.fontSize = "24px"
    resultado.innerText = `${nomeCompleto} nasceu no dia ${dataNasc} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${uf}.` 
    
}