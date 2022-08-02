//criar uma função que cria objetos de endereço
//os objetos devem possuir:
//Rua, cidade, CEP
//E ao final exibir o endereço criado

function novoEndereco(rua, cidade, cid, CEP, num){
    const endereco = {
        Rua : rua,
        Cidade : cidade,
        cid : cid,
        CEP : CEP,
        num : num
    }
    return(endereco);
}

let cliente1 = novoEndereco('Riachuelo', 'Rio de Janeiro', 'RJ', 20230015, 260 );
console.log(cliente1);