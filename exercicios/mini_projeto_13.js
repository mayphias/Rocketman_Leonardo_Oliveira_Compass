//criar uma função que cria objetos de postagem de um blog, nele iram contem as seguintes propriedades:
//titulo, menssagem, autor, vizualizações, comentarios (autor, menssagem), estar ao-vivo


function postagem(titulo, menssagem, autor){   //função que cria o objeto da postagem
    const post = {              //criação do objeto com as seguintes propriedades:
        titulo : titulo,
        menssagem : menssagem,
        autor : autor,
        vizualizações : 0,
        live: true
    }
    return(post);      //retorna o objeto criado
}

let post1 = postagem('Meu primeiro post =)', 'queria deixar registrado meu primeiro post.', 'Leonardo'); //criação de um obj de postagem, com as informações dadas

post1.comentarios = ['Matheus', 'gostei do seu primero post ;) continue assim.']; //cria a propriedade em lista no objeto e o adiciona a ele
post1.vizualizações++;  //sobe a contagem em um da propriedade de vizualizações do objeto post1
post1.comentarios.push('Leandro', 'É assim mesmo que se começa!'); // adiciona mais duas variaveis na lista da propriedade comentarios
post1.vizualizações++; //sobe a contagem em um da propriedade de vizualizações do objeto post1

console.log(post1);   //mostra no console o objeto criado e todas as propriedades que ele possue
