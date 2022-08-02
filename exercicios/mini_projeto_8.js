//O objetivo desse programa é calcular a média simples de um conjunto de notar de 0-10
//e mostrar no console em que faixa de média a nota final se assemalha aos padrões americanos
//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

let notas = [80,70,70];   //conjunto de notas a serem inseridas na media

function mediaNotas (notas){   // inicio da função
    let base = 0;              //contagem da base de notas somadas
    let media = 0;             //soma das notas e valor final a ser retornado
    notas.forEach(pontuacao => {  //para cada item no array somar o valor a media
        media += pontuacao;
        base++                  //adiciona 1 para cada soma a media
    });
    media = media/base          //divide o valor da media pela base
    if (media < 60){            //caso a media fique inferior a 60
        return("F");
    }
    if (media < 70){             //caso a media fique inferior a 70
        return("D");
    }
    if (media < 80){             //caso a media fique inferior a 80
        return("C");
    }
    if (media < 90){             //caso a media fique inferior a 90
        return("B");
    }
    else{                        //caso não se encaixe em nenhum dos outros casos
        return("A");
    }
}

console.log(mediaNotas(notas));     //chama a função (mediaNotas), insere a array a ser avaliada (notas) e imprime no console (cosole.log)