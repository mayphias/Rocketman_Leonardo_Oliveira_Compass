//O objetivo do código é criar uma classe para ser exportada e testada via mocha (chai para mais clareza)
//A classe irá possuir operações simples a serem testadas pelo arquivo de testes presentes na pasta ./../test

export default class calculadora {
    //operação de soma
    static soma (a, b){
        return(a + b);
    }
    //operação de subtração
    static sub (a, b){
        return(a - b);
    }
    //operação de multiplicação
    static mult (a, b){
        return(a * b);
    }
    //operação de divisão
    static div (a, b){
        if (b === 0){
            return("ERROR, can't divide by 0");
        }
        return(a / b);
    }
    //operação de exponencial
    static exp (a, b){
        return(a**b);
    }
    //operação de fatorial de um numero
    static rFact (num){                       //https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript
        if (num === 0){
           return (1); }
        else{
         return (num * rFact( num - 1 )); }
    }
    //operação de raiz quadrada
    static sqrt (a){
        return(Math.sqrt(a));
    }


}