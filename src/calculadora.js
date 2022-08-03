

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
    static rFact(num)
    {
        if (num === 0)
          { return 1; }
        else{
         return num * rFact( num - 1 ); }
    }


}