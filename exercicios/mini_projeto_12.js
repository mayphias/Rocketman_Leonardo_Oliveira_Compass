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

function comparaEndereco(pessoa1,pessoa2){    //função que compara aspectos dos endereços de dois clientes
    for (const prop in pessoa1){
        if (pessoa1[prop] === pessoa2[prop]) {                     //caso o aspecto seja igual
            console.log(pessoa1[prop],'==', pessoa2[prop], '?', true);  //retorna no console qual aspecto estava sendo testado e o resultado true
        }
        else{
            console.log(pessoa1[prop],'==', pessoa2[prop], '?', false);  //caso sejam diferentes, retorna qual aspecto estava sendo testado e o resultado: false.
        }
    }
}

function enderecoMemoria(pessoa1,pessoa2){   //função que retorna true caso as variaveis estejam utilizando o mesmo espaço de memoria
    return pessoa1 === pessoa2;
}

let cliente1 = novoEndereco('Riachuelo', 'Rio de Janeiro', 'RJ', 20230015, 260); //criação dos clientes com as informações desejadas
let cliente2 = novoEndereco('Riachuelo', 'Rio de Janeiro', 'RJ', 20230015, 263);

comparaEndereco(cliente1, cliente2);  //chama a função que compara os endereços dos clientes 
console.log('endereço de memoria iguais ? ' + enderecoMemoria(cliente1, cliente2));  //chama a função que verifica se estão no mesmo espaço de memoria