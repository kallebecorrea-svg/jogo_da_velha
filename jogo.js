let button, quebraLinha, jogada = 1, vencedor = 0;
let tabuleiro = new Array(3);

for (let i = 0; i < tabuleiro.length; i++) {
    tabuleiro[i] = new Array(3);
}

for (let i = 0; i < tabuleiro.length; i++) {
    quebraLinha = document.createElement('br');
    document.body.append(quebraLinha);
    for (let j = 0; j < tabuleiro[i].length; j++) {
        button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('id', 'bt' + i + "" + j);
        button.setAttribute('class', 'btJogo' + i);
        button.setAttribute('onclick', 'marca('+ i + ',' + j + ')')
        button.append(document.createTextNode(""));
        document.body.append(button);

        //button.style.backgroundColor = (i + j) % 2 === 0 ? 'white' : 'black';
    }
}

let h3 = document.createElement('h3');
h3.setAttribute('id', resultado);
document.body.append(h3)

function marca(linha, coluna){
    marcarCasa("bt" + linha + "" + coluna)
}

function marcarCasa(nomeBotao){
    jogada++
    if(jogada % 2 == 0){
        document.getElementById(nomeBotao).innerHTML = "X";
        document.getElementById(nomeBotao).style.color = "black";
    } else {
        document.getElementById(nomeBotao).innerHTML = "O";
        document.getElementById(nomeBotao).style.color = "blue";
    }
    document.getElementById(nomeBotao).desabled = true;
    let line = nomeBotao.charAt(2);
    let column = nomeBotao.charAt(3);
    jogada > 5 ? encerraJogo(line, column, 0, 0) : ""

    if(jogada > 9 && vencedor == 0){
        document.getElementById('resultado').innerHTML = "Deu velha!"
    } else{
        document.getElementById('resultado').innerHTML = "É us guri, ganhou"
    }
}

function travarCasa(){}