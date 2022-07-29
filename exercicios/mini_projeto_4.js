//projeto radar de velocidade
//velocidade máxima 70 km/h
//a cada 5km/h a cima do limite é adicionado 1 ponto á carteira
//utilizar math.floor() para arredondar numeros
//caso os pontos excedam 12 suspender a carteira

let velocidadeMedia = 130;  //variavel da velocidade media a ser avaliada pelo radar

function radar (vel){             //função radar
    let velo = Math.floor(vel);    //arredondamento do valor
    let pontos = 0;               //variavel que armazena a quantidade de pontos em caso de transgressão
    if (velo <= 70){             //velocidade inferior ou igual a máxima permitida
        return("Ok");
    }
    if (velo > 70){              //velocidade superior a permitida
        for (i = (velo-70); i > 0; i=i-5){   //calculo de soma de pontos 
        pontos++
        }
    }
    if (pontos >= 12){              //caso os pontos excedam 12, suspender carteira
        return("Carteira suspensa!")
    }
    else{                         //caso a carteira não seja suspensa retornar os pontos a serem deduzidos da carteira
        return("menos " + pontos + " pontos na carteira.")
    }
}


console.log(radar(velocidadeMedia));    //chama a função assim como declara o resultado no terminal