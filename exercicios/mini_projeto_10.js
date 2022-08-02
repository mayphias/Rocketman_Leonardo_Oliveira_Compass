//criar uma função para mostrar numeros primos dado um numero limite
//ou sesja quais são os numeros primos até o numero x dado

let limite = 100;      //limite de numeros a serem testados para numeros primos

function acharPrimos (limite){     //inicio da função para achar numeros primos
    let primos = [1];               //seja um array inicial de numeros primos contendo 1
    for (i = 2; i < limite; i++){   //para cada numero até o limite estabelecido apartir do proximo numero fora do array
        let div = 0;                //contabilizador de divisões feitas por cada numero (contador resetado a cada interação)
        primos.forEach(primo => {   //a cada numero é testado para cada numero primo já encontrado
            if (i % primo === 0){   //se a divisão tiver resto 0 é adicionado um ao contador de divisões
                div++
            }
        });
    if (div < 2){                  //caso o numero testado só tenha tido a divisão completa somente por 1 adicionar ele a lista de primos
        primos.push(i);
    }
    }
return(primos);                    //a função retorna a lista de numeros primos encontrados
}

console.log(acharPrimos(limite));     //chamada da função (acharPrimos), pelo limite estabelecido (limite), e imprime no console (console.log)