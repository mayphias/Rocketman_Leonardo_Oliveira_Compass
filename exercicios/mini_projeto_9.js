//criar uma função que exibe uma quantidade x de asteristicos
//sendo crescente de um x fatorial

let fact = 10;

function asteristicos (num){
    let armazem = '';
    for (let i = 0; i < num; i++){
        armazem += '*';
        console.log(armazem);
    }
}

asteristicos(fact);