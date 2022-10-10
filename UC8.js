var listadePeca = ["Filtro de Ar", "Amortecedor", "Disco de Freio"]

if (listadePeca.length < 10){
    console.log("é possivel cadastrar mais peças")
} else {
    console.log("A lista está completa")
}

let peso = 500
if(peso<100){
 console.log("a Peça precisa ter no minimo 100g")
}else{
 console.log("a peça possui peso adequado")
}

let nomePeca = "Caixa de Câmbio"
if (nomePeca.length>3){
    
    console.log("O tamanho do nome da peça esta adequado")
}else{
    console.log("O nome deve ter mais que 3 caracteres, digite um nome adequado")
}
