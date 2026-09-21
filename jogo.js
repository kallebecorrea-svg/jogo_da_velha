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

//     if (jogada > 9 && vencedor == 0) {
//         document.getElementById('resultado').innerHTML = "Deu velha!"
//     } else {
//         document.getElementById('resultado').innerHTML = "É us guri, ganhou"
//     }
// }

function travarCasa() {
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++) {
            document.getElementById("bt" + i + "" + j).disabled = true
        }
    }
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