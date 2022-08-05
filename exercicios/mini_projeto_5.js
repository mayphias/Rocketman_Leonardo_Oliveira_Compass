//receber uma quantidade X de números ou limite e avaliar se é impar ou par
//depois exibir se o valor é impar ou par

const list = [10,11,13,14,15,16];     //A lista e os itens que terão os valores vistos se são pares ou impares

function impaPar (i){   //função que verifica os numeros impares e pares
    if (i%2 == 1){    //caso a divisão por 2 tenha resto 1 o número é impar
        console.log("O número " + i + " É impar.");
    }
    else{  //em todo outro caso o número (inteiro) deve ser par
        console.log("O número " + i + " É par.");
    }
}



list.forEach(impaPar) //comando lança cada valor dentro da lista para ser executado na função