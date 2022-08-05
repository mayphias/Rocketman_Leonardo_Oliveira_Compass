let num1 = 50;    //declaração das variaveis
let num2 = 70;

function maior (num1,num2){    //função para determinar qual dos dois valores é o maior
   
    if (num1 > num2){   //return num1 > num2 ? num1 : num2; *uma possibilidade de escrita para a função
        return (num1);
    }
    else{
        return (num2);
    }
    }

console.log ("O maior número entre os dois inseridos é: " + maior(num1,num2)); // declara no terminal, chamando a função feita, o maior valor.
