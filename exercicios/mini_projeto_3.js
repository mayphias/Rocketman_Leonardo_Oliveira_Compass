//A seguir as regras da função a ser criada:
//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 5 e 3 => FizzBuzz
//Não divisível por 5 nem por 3 == <Entrada>
//Não é um número == "Não é um número"

function FizzBuzz (num){       // a função em si
    if (Number.isInteger(num)){ //checagem se o número inserido é inteiro
        if (((num % 3) == 0) && ((num % 5) == 0)){  //se for divisivel por 3 e 5
            return ("FizzBuzz");
        }
        if ((num % 3) == 0){  //somente por 3
            return("Fizz");
        }
        if ((num % 5) == 0){  //somente por 5
            return("Buzz");
        }
        else{                 //se não for nenhum dos casos acima
            return(num);
        }
    }
    else{                     //se não for um inteiro
        return("Not a Integer!");
    }
}

let number = 15;              //a variavel a ser modificada
console.log(FizzBuzz(number));//chamagem da função assim como declaração no terminal