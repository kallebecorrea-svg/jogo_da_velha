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
        button.setAttribute('onclick', 'marca(' + i + ',' + j + ')')
        button.append(document.createTextNode(""));
        document.body.append(button);

        //button.style.backgroundColor = (i + j) % 2 === 0 ? 'white' : 'black';
    }
}

let h3 = document.createElement('h3');
h3.setAttribute('id', 'resultado');
document.body.append(h3)

function marca(linha, coluna) {
    marcarCasa("bt" + linha + "" + coluna)

    // checa a linha e a coluna que acabaram de ser jogadas, mais as 2 diagonais
    encerraJogo(linha, coluna, 0, 0)

    if (jogada > 9 && vencedor == 0) {
        document.getElementById('resultado').innerHTML = "Deu velha!"
    }
}

function marcarCasa(nomeBotao) {
    jogada++
    if (jogada % 2 == 0) {
        document.getElementById(nomeBotao).innerHTML = "X";
        document.getElementById(nomeBotao).style.color = "black";
    } else {
        document.getElementById(nomeBotao).innerHTML = "O";
        document.getElementById(nomeBotao).style.color = "blue";
    }
    document.getElementById(nomeBotao).disabled = true
}   

function travarCasa() {
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++) {
            document.getElementById("bt" + i + "" + j).disabled = true
        }
    }
}

function encerraJogo(linha, coluna, linhaManual, colunaManual){
    verificarLinhasXColunas(linha, linha, linha, colunaManual, colunaManual+1, colunaManual+2)

    verificarLinhasXColunas(linhaManual, linhaManual+1, linhaManual+2, coluna, coluna, coluna)

    verificaDiagonal("bt00", "bt11", "bt22")
    verificaDiagonal("bt02", "bt11", "bt20")
}

function verificarLinhasXColunas(posL1, posL2, posL3, posC1, posC2, posC3) {
    if (document.getElementById("bt" + posL1 + "" + posC1).innerText == document.getElementById("bt" + posL2 + "" + posC2).innerText
        &&
        document.getElementById("bt" + posL2 + "" + posC2).innerText == document.getElementById("bt" + posL3 + "" + posC3).innerText
        && document.getElementById("bt" + posL1 + "" + posC1).innerText != "") {
            document.getElementById("resultado").innerHTML = "Jogo Finalizado! Vencedor: " + document.getElementById("bt" + posL1 + "" + posC1).innerText
                travarCasa()
                for(let cont in tabuleiro){
                    (posC1 == 0 && posC2 == 1 && posC3 == 2) ? document.getElementById("bt" + posL1 + "" + cont).style.color = "red": document.getElementById("bt" + cont + "" + posC1).style.color = "black"

                    vencedor++
                } 
    }
}

function verificaDiagonal(pos1, pos2, pos3){
    let diagonal = [
     document.getElementById(pos1).innerText, 
     document.getElementById(pos2).innerText,
     document.getElementById(pos3).innerText
    ];
    if((diagonal[0] == "X" && diagonal[1] == "X" && diagonal[2] == "X" ) || 
   ( diagonal[0] == "O" && diagonal[1] == "O" && diagonal[2] == "O")
  ){
     document.getElementById("resultado").innerText = "Jogo Finalizado!\nVencedor: " + document.getElementById("bt11").innerText;
     travarCasa();
     let contRegressivo = tabuleiro.length -1;
     for(let cont in tabuleiro){
        (pos3 == "bt22") ? document.getElementById("bt" + cont + "" + cont).style.color = "red" : 
        document.getElementById("bt" + cont + "" + contRegressivo--).style.color = "blue";

        vencedor++;
     }
  }
};