let vez = 0
let rodada = 1

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

if(start == 'O' && rodada%2 == 1){
    console.log("qume começa é o 'O', rodada: " + rodada)
    vez++
    if(vez == 1){
        jogador2()
        console.log("eu jogo primeiro, quando rodada é impar" + rodada + " e é a primeira vez " + vez)
    }
}
else if(start == 'X'){
    rodada++
    console.log("qume começa é o 'X', rodada: " + rodada)
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
    vez = 0
    rodada++
    console.log("limpei, aumentei a rodada " + rodada)
    console.log("zerei as vezes, " + vez)
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

function jogador2(){
    let numero = Math.ceil(Math.random()*9)

    if(rodada%2==1 && vez==0){
        vez++
    }

    if(numero == 1){
        if(um.innerHTML == ""){
            um.innerHTML = "O"
            vez++
            console.log("Jogador 2, joguei na " + numero)
            console.log("Jogador 2, aumentei a vez " + vez)
            ganhar()
            velha()
        }
        else{
            jogador2()
        }
    }
    else if(numero == 2){
        if(dois.innerHTML == ""){
            dois.innerHTML = "O"
            vez++
            console.log("Jogador 2, joguei na " + numero)
            console.log("Jogador 2, aumentei a vez " + vez)
            ganhar()
            velha()
        }
        else{
            jogador2()
        }
    }
    else if(numero == 3){
        if(tres.innerHTML == ""){
            tres.innerHTML = "O"
            vez++
            console.log("Jogador 2, joguei na " + numero)
            console.log("Jogador 2, aumentei a vez " + vez)
            ganhar()
            velha()
        }
        else{
            jogador2()
        }
    }
    else if(numero == 4){
        if(quatro.innerHTML == ""){
            quatro.innerHTML = "O"
            vez++
            console.log("Jogador 2, joguei na " + numero)
            console.log("Jogador 2, aumentei a vez " + vez)
            ganhar()
            velha()
        }
        else{
            jogador2()
        }
    }
    else if(numero == 5){
        if(cinco.innerHTML == ""){
            cinco.innerHTML = "O"
            vez++
            console.log("Jogador 2, joguei na " + numero)
            console.log("Jogador 2, aumentei a vez " + vez)
            ganhar()
            velha()
        }
        else{
            jogador2()
        }
    }
    else if(numero == 6){
        if(seis.innerHTML == ""){
            seis.innerHTML = "O"
            vez++
            console.log("Jogador 2, joguei na " + numero)
            console.log("Jogador 2, aumentei a vez " + vez)
            ganhar()
            velha()
        }
        else{
            jogador2()
        }
    }
    else if(numero == 7){
        if(sete.innerHTML == ""){
            sete.innerHTML = "O"
            vez++
            console.log("Jogador 2, joguei na " + numero)
            console.log("Jogador 2, aumentei a vez " + vez)
            ganhar()
            velha()
        }
        else{
            jogador2()
        }
    }
    else if(numero == 8){
        if(oito.innerHTML == ""){
            oito.innerHTML = "O"
            vez++
            console.log("Jogador 2, joguei na " + numero)
            console.log("Jogador 2, aumentei a vez " + vez)
            ganhar()
            velha()
        }
        else{
            jogador2()
        }
    }
    else if(numero == 9){
        if(nove.innerHTML == ""){
            nove.innerHTML = "O"
            vez++
            console.log("Jogador 2, joguei na " + numero)
            console.log("Jogador 2, aumentei a vez " + vez)
            ganhar()
            velha()
        }
        else{
            jogador2()
        }
    }
}

function testes(){

    if(rodada%2==0 && vez == 0){
    }else{
        jogador2()
    }

}

function preencher1(){
    if(um.innerHTML == ""){
        if(vez%2 == 0){
            um.innerHTML = "X"
            vez++
            ganhar()
            velha()
            testes()
        }
    }

}

function preencher2(){
    if(dois.innerHTML == ""){
        if(vez%2 == 0){
            dois.innerHTML = "X"
            vez++
            ganhar()
            velha()
            testes()
        }
    }
}

function preencher3(){
    if(tres.innerHTML == ""){
        if(vez%2 == 0){
            tres.innerHTML = "X"
            vez++
            ganhar()
            velha()
            testes()
        }
    }
}

function preencher4(){
    if(quatro.innerHTML == ""){
        if(vez%2 == 0){
            quatro.innerHTML = "X"
            vez++
            ganhar()
            velha()
            testes()
        }
    }
}

function preencher5(){
    if(cinco.innerHTML == ""){
        if(vez%2 == 0){
            cinco.innerHTML = "X"
            vez++
            ganhar()
            velha()
            testes()
        }
    }
}

function preencher6(){
    if(seis.innerHTML == ""){
        if(vez%2 == 0){
            seis.innerHTML = "X"
            vez++
            ganhar()
            velha()
            testes()
        }
    }
}

function preencher7(){
    if(sete.innerHTML == ""){
        if(vez%2 == 0){
            sete.innerHTML = "X"
            vez++
            ganhar()
            velha()
            testes()
        }
    }
}

function preencher8(){
    if(oito.innerHTML == ""){
        if(vez%2 == 0){
            oito.innerHTML = "X"
            vez++
            ganhar()
            velha()
            testes()
        }
    }
}

function preencher9(){
    if(nove.innerHTML == ""){
        if(vez%2 == 0){
            nove.innerHTML = "X"
            vez++
            ganhar()
            velha()
            testes()
        }
    }
}
