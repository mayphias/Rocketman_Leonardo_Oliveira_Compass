//criar um metodo para ler as propriedades de um objeto
//printar todas as propriedades do objeto que forem string

const movie = {        //criação do objeto e suas propriedades
    filme : "Inception",
    ano : 2010,
    atorPrincipal : "LeonardoDiCaprio"
}

function selectStrg(filme){   //função que imprime no console as partes das propriedades do obj que forem string
    for (const property in filme) {   //pequeno loop para cada propriedade do obj

        if (IsJsonString(`${filme[property]}`)){  //se a função IsJsonString for verdadeira ele imprime no console
        console.log(`${property}: ${filme[property]}`);  //a impressão no console
        }
    }
}

function IsJsonString(str) {  //função que testa se a propriedade do obj é uma string, retirado de: https://www.codegrepper.com/code-examples/javascript/javascript+check+if+object+is+string dia 02/08/2022
    try {                     // o programa tenta executar o codigo, se passar ele retorna verdadeiro no catch
        JSON.parse(str);
    } catch (e) {
        return true;
    }
    return false;  //caso o codigo não de para ser executado ele retorna falso e o if na função selectStrg não é executado
}

selectStrg(movie);  //seleciona a função a ser executada e a variavel que ele vai trabalhar, no caso (movie)

//jeito mais simples de fazer a mesma coisa:
// function selectStrg(filme){
    //for prop in filme{
        //if (typeof filme[prop] === 'string'{
            //console.log(prop, filme[prop])
       // }
  //  }
//}