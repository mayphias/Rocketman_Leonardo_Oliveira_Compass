//criar um array de objetos para que possa ser utilizado parecido com a faixa de preço do mercado livre

function cadastroProdutos (nome, preco, descricao){
    const item = {
        nome : nome,
        preco : preco,
        descricao: descricao 
    }
    return (item);
}

function faixaPrecoBaixo (produto){
    let faixaB = [];
    for (const prop in produto){
        if (Math.floor(produto[prop].preco) < 75 ){
            faixaB.push(produto[prop]);
        }
    }
  
    return (faixaB);
}

function faixaPrecoMedio (produto){
    let faixaM = [];
    for (const prop in produto){
        if ((Math.floor(produto[prop].preco) > 75 ) && (Math.floor(produto[prop].preco) < 150)){
            faixaM.push(produto[prop]);
       }
    }
    return (faixaM);
}

function faixaPrecoAlto (produto){
    let faixaA = [];
    //console.log('Entrei na funcao')
    for (const prop in produto){
        //console.log('estou no loop');
        //console.log(prop);
        if (Math.floor(produto[prop].preco) > 150 ){
            faixaA.push(produto[prop]);
        }
    }
    return (faixaA);
}


let totalItens = [];

let item1 = cadastroProdutos('controle de xbox', 50, 'joystick para jogar e se divertir');
totalItens.push(item1);

let item2 = cadastroProdutos('jogo minecraft fisico', 125, 'copia fisica do jogo infantil: minecraft');
totalItens.push(item2);

let item3 = cadastroProdutos('Just dance 3, copia fisica', 125, 'jogue você e seus amigos nesse jogo interativo');
totalItens.push(item3);

let item4 = cadastroProdutos('Xbox360', 980, 'Console Xbox360 da microsoft, original.');
totalItens.push(item4);


let faixaBaixa = faixaPrecoBaixo(totalItens);
let faixaMedia = faixaPrecoMedio(totalItens);
let faixaAlta = faixaPrecoAlto(totalItens);

console.log(faixaBaixa);
console.log('');
console.log(faixaMedia);
console.log('');
console.log(faixaAlta);

//console.log(totalItens.length);
