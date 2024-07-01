let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto' );
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
//funcao para exibir texto na tella


function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let mensagemTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentatiavas = `Você descobriu o numero secreto com ${tentativas} ${mensagemTentativa}`;
        exibirTextoNaTela('p', mensagemTentatiavas);
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor');
        }else {
            exibirTextoNaTela('p', 'O número secretor é maior');
        }
        tentativas++;
    }   

}

function gerarNumeroAleatorio(){
     return parseInt(Math.random() * 10 +1)
}