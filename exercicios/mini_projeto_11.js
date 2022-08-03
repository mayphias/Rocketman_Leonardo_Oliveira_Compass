//criar uma função que cria objetos de endereço
//os objetos devem possuir:
//Rua, cidade, CEP
//E ao final exibir o endereço criado

function novoEndereco(rua, cidade, cid, CEP, num){    //criar a função que gera novos endereços
    const endereco = {                              //cria um obj quais as propriedades:
        Rua : rua,
        Cidade : cidade,
        cid : cid,
        CEP : CEP,
        num : num
    }
    return(endereco);                           //retorna o objeto criado
}

let cliente1 = novoEndereco('Riachuelo', 'Rio de Janeiro', 'RJ', 20230015, 260 );   //chama a função de criar o endereço com as informações que o objeto deve ter
console.log(cliente1);   //exibe as informações do cliente no console