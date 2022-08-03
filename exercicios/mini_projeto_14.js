//criar um array de objetos para que possa ser utilizado parecido com a faixa de preço do mercado livre

function cadastroProdutos (nome, preco, descricao){  //função que cria um obj com as propriedades do produto
    const item = {
        nome : nome,
        preco : preco,
        descricao: descricao 
    }
    return (item);
}

function faixaPrecoBaixo (produto){  //cria um array com os produtos que se encaixam na faixa de preço desejada
    let faixaB = [
        {tooltip : 'abaixo de 75 reais' }  
    ];
    for (const prop in produto){
        if (Math.floor(produto[prop].preco) < 75 ){  //faixa de preço desejada
            faixaB.push(produto[prop]);
        }
    }
  
    return (faixaB);
}

function faixaPrecoMedio (produto){  //cria um array com os produtos que se encaixam na faixa de preço desejada
    let faixaM = [
        {tolltip: 'entre 75 e 150 reais'}
    ];
    for (const prop in produto){
        if ((Math.floor(produto[prop].preco) > 75 ) && (Math.floor(produto[prop].preco) < 150)){ //faixa de preço desejada
            faixaM.push(produto[prop]);
       }
    }
    return (faixaM);
}

function faixaPrecoAlto (produto){   //cria um array com os produtos que se encaixam na faixa de preço desejada
    let faixaA = [
        {tooltip: 'acima de 150 reais'}
    ];
    //console.log('Entrei na funcao')
    for (const prop in produto){
        //console.log('estou no loop');
        //console.log(prop);
        if (Math.floor(produto[prop].preco) > 150 ){ //faixa de preçop desejada
            faixaA.push(produto[prop]);
        }
    }
    return (faixaA);
}


let totalItens = [];  //cria uma lista vazia para acomodar todos os itens criados

let item1 = cadastroProdutos('controle de xbox', 50, 'joystick para jogar e se divertir'); //cria um item com as caracteristicas desejadas
totalItens.push(item1);  //adiciona o item a lista dos itens criados

let item2 = cadastroProdutos('jogo minecraft fisico', 125, 'copia fisica do jogo infantil: minecraft');
totalItens.push(item2);

let item3 = cadastroProdutos('Just dance 3, copia fisica', 125, 'jogue você e seus amigos nesse jogo interativo');
totalItens.push(item3);

let item4 = cadastroProdutos('Xbox360', 980, 'Console Xbox360 da microsoft, original.');
totalItens.push(item4);


let faixaBaixa = faixaPrecoBaixo(totalItens); //cria listas dos itens que se encaixam na faixa de preço determinado pela função
let faixaMedia = faixaPrecoMedio(totalItens);
let faixaAlta = faixaPrecoAlto(totalItens);

console.log(faixaBaixa);  //mostra as listas já separadas pelas faixas de preço desejadas
console.log('');
console.log(faixaMedia);
console.log('');
console.log(faixaAlta);

//console.log(totalItens.length);
