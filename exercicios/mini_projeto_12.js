//criar uma função de endereço, criar dois endereços e em uma nova função comparar se os valores das propriedades desses objetos são iguais
//e se os dois valores possuem o mesmo endereço de memoria

function novoEndereco(rua, cidade, cid, CEP, num){  //função copiada do mini_projeto_11
    const endereco = {
        Rua : rua,
        Cidade : cidade,
        cid : cid,
        CEP : CEP,
        num : num
        
    }
    return(endereco);
}

function comparaEndereco(pessoa1,pessoa2){
    for (const prop in pessoa1){
        if (pessoa1[prop] === pessoa2[prop]) {
            console.log(pessoa1[prop],'==', pessoa2[prop], '?', true);
        }
        else{
            console.log(pessoa1[prop],'==', pessoa2[prop], '?', false);
        }
    }
}

function enderecoMemoria(pessoa1,pessoa2){
    return pessoa1 === pessoa2;
}

let cliente1 = novoEndereco('Riachuelo', 'Rio de Janeiro', 'RJ', 20230015, 260);
let cliente2 = novoEndereco('Riachuelo', 'Rio de Janeiro', 'RJ', 20230015, 263);

comparaEndereco(cliente1, cliente2);
console.log('endereço de memoria iguais ? ' + enderecoMemoria(cliente1, cliente2));