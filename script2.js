let vez = 0

let um = document.getElementById("um")
let dois = document.getElementById("dois")
let tres = document.getElementById("tres")
let quatro = document.getElementById("quatro")
let cinco = document.getElementById("cinco")
let seis = document.getElementById("seis")
let sete = document.getElementById("sete")
let oito = document.getElementById("oito")
let nove = document.getElementById("nove")

let placarX = document.getElementById("placarX")
let placarO = document.getElementById("placarO")
let placar1 = 0
let placar2 = 0
placarX.innerHTML = placar1
placarO.innerHTML = placar2

let start = prompt("Digite X ou O para quem começa").toUpperCase()

if(start == 'O'){
    vez++
}
else if(start == 'X'){
    vez = 0
}
else{
    let start = prompt("Digite X ou O para quem começa")
}

function velha(){
    if(um.innerHTML != "" && dois.innerHTML != "" && tres.innerHTML != "" && quatro.innerHTML != "" && cinco.innerHTML != "" && seis.innerHTML != "" && sete.innerHTML != "" && oito.innerHTML != "" && nove.innerHTML != ""){
        alert("Deu velha!")
        limpa()
    }
}

function limpa(){
    um.innerHTML = ""
    dois.innerHTML = ""
    tres.innerHTML = ""
    quatro.innerHTML = ""
    cinco.innerHTML = ""
    seis.innerHTML = ""
    sete.innerHTML = ""
    oito.innerHTML = ""
    nove.innerHTML = ""
}

function ganhar(){
    //Se o 'X' ganhar
    if(um.innerHTML == "X" && dois.innerHTML == "X" && tres.innerHTML == "X"){
        alert("'X' ganhou")
        limpa()
        placar1++
        placarX.innerHTML = placar1
    }
    else if(quatro.innerHTML == "X" && cinco.innerHTML == "X" && seis.innerHTML == "X"){
        alert("'X' ganhou")
        limpa()
        placar1++
        placarX.innerHTML = placar1
    }
    else if(sete.innerHTML == "X" && oito.innerHTML == "X" && nove.innerHTML == "X"){
        alert("'X' ganhou")
        limpa()
        placar1++
        placarX.innerHTML = placar1
    }
    else if(um.innerHTML == "X" && quatro.innerHTML == "X" && sete.innerHTML == "X"){
        alert("'X' ganhou")
        limpa()
        placar1++
        placarX.innerHTML = placar1
    }
    else if(dois.innerHTML == "X" && cinco.innerHTML == "X" && oito.innerHTML == "X"){
        alert("'X' ganhou")
        limpa()
        placar1++
        placarX.innerHTML = placar1
    }
    else if(tres.innerHTML == "X" && seis.innerHTML == "X" && nove.innerHTML == "X"){
        alert("'X' ganhou")
        limpa()
        placar1++
        placarX.innerHTML = placar1
    }
    else if(um.innerHTML == "X" && cinco.innerHTML == "X" && nove.innerHTML == "X"){
        alert("'X' ganhou")
        limpa()
        placar1++
        placarX.innerHTML = placar1
    }
    else if(tres.innerHTML == "X" && cinco.innerHTML == "X" && sete.innerHTML == "X"){
        alert("'X' ganhou")
        limpa()
        placar1++
        placarX.innerHTML = placar1
    }

    //Se o 'O' ganhar
    if(um.innerHTML == "O" && dois.innerHTML == "O" && tres.innerHTML == "O"){
        alert("'O' ganhou")
        limpa()
        placar2++
        placarO.innerHTML = placar2
    }
    else if(quatro.innerHTML == "O" && cinco.innerHTML == "O" && seis.innerHTML == "O"){
        alert("'O' ganhou")
        limpa()
        placar2++
        placarO.innerHTML = placar2
    }
    else if(sete.innerHTML == "O" && oito.innerHTML == "O" && nove.innerHTML == "O"){
        alert("'O' ganhou")
        limpa()
        placar2++
        placarO.innerHTML = placar2
    }
    else if(um.innerHTML == "O" && quatro.innerHTML == "O" && sete.innerHTML == "O"){
        alert("'O' ganhou")
        limpa()
        placar2++
        placarO.innerHTML = placar2
    }
    else if(dois.innerHTML == "O" && cinco.innerHTML == "O" && oito.innerHTML == "O"){
        alert("'O' ganhou")
        limpa()
        placar2++
        placarO.innerHTML = placar2
    }
    else if(tres.innerHTML == "O" && seis.innerHTML == "O" && nove.innerHTML == "O"){
        alert("'O' ganhou")
        limpa()
        placar2++
        placarO.innerHTML = placar2
    }
    else if(um.innerHTML == "O" && cinco.innerHTML == "O" && nove.innerHTML == "O"){
        alert("'O' ganhou")
        limpa()
        placar2++
        placarO.innerHTML = placar2
    }
    else if(tres.innerHTML == "O" && cinco.innerHTML == "O" && sete.innerHTML == "O"){
        alert("'X' ganhou")
        limpa()
        placar2++
        placarO.innerHTML = placar2
    }
}

function preencher1(){
    if(um.innerHTML == ""){
        if(vez%2 == 0){
            um.innerHTML = "X"
        }
        else{
            um.innerHTML = "O"
        }
        vez++
        ganhar()
        velha()
    }

}

function preencher2(){
    if(dois.innerHTML == ""){
        if(vez%2 == 0){
            dois.innerHTML = "X"
        }
        else{
            dois.innerHTML = "O"
        }
        vez++
        ganhar()
        velha()
    }
}

function preencher3(){
    if(tres.innerHTML == ""){
        if(vez%2 == 0){
            tres.innerHTML = "X"
        }
        else{
            tres.innerHTML = "O"
        }
        vez++
        ganhar()
        velha()
    }
}

function preencher4(){
    if(quatro.innerHTML == ""){
        if(vez%2 == 0){
            quatro.innerHTML = "X"
        }
        else{
            quatro.innerHTML = "O"
        }
        vez++
        ganhar()
        velha()
    }
}

function preencher5(){
    if(cinco.innerHTML == ""){
        if(vez%2 == 0){
            cinco.innerHTML = "X"
        }
        else{
            cinco.innerHTML = "O"
        }
        vez++
        ganhar()
        velha()
    }
}

function preencher6(){
    if(seis.innerHTML == ""){
        if(vez%2 == 0){
            seis.innerHTML = "X"
        }
        else{
            seis.innerHTML = "O"
        }
        vez++
        ganhar()
        velha()
    }
}

function preencher7(){
    if(sete.innerHTML == ""){
        if(vez%2 == 0){
            sete.innerHTML = "X"
        }
        else{
            sete.innerHTML = "O"
        }
        vez++
        ganhar()
        velha()
    }
}

function preencher8(){
    if(oito.innerHTML == ""){
        if(vez%2 == 0){
            oito.innerHTML = "X"
        }
        else{
            oito.innerHTML = "O"
        }
        vez++
        ganhar()
        velha()
    }
}

function preencher9(){
    if(nove.innerHTML == ""){
        if(vez%2 == 0){
            nove.innerHTML = "X"
        }
        else{
            nove.innerHTML = "O"
        }
        vez++
        ganhar()
        velha()
    }
}
