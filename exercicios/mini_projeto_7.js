//criar uma função que pega um fatorial x e soma somente os multiplos de 5 e de 3
//a função funcionará da seguinte forma:
//irá se verificar se os numeros são multiplos de 3 ou 5
//armazenar os valores
//somar os valores
//devolver no terminal a soma final dos valores somados

let fact = 20;   // variavel do fatorial x!

function somador (numero){  //função do somador dos divisores de 3 e 5
    let armazem_3 = [];     // define o local de armazenagem dos valores divisiveis por 3
    let armazem_5 = [];     //define o local de armazenagem dos valores divisiveis por 5
    let soma = 0;           // valor final da soma dos valores
    for (i = numero ; i > 0; i--){  // loop para pegar todos os valores do fatorial, desde o maior até 1
        if (i % 3 === 0){           //se o valor tiver resto 0
            armazem_3.push(i);      //armazenar o valor no array
            continue;               //continuar o loop para não ter a possibilidade de armazenar o mesmo valor duas vezes
        }
        if (i % 5 === 0){           //se o valor tiver resto 0
            armazem_5.push(i);      //armazenar no array
        }   
    }
    armazem_3.forEach(Number => {   //depois do loop, se faz outro para cada valor do array
        soma += Number;             // se pega o valor da soma e se adiciona mais o valor do array
    });
    armazem_5.forEach(Number =>{   //para cada valor do array:
        soma += Number;            //somar ele ao valor total da soma
    });
    return(soma);                  //retorna o valor da soma
}

console.log(somador(fact));        //chama a função (somador), com a variavel (fact), e imprime no console (console.log)