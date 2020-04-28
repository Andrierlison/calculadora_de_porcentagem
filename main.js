function calcularPorcentagem(){
    var valor = document.getElementById("valor").value
    var porcentagem = document.getElementById("porcentagem").value
    var resultado
    
    valor = parseInt(valor)
    porcentagem = parseInt(porcentagem)
    
    resultado = (valor*porcentagem)/100
    document.getElementById("resultado").innerHTML = resultado
}