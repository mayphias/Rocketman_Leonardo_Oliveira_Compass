//criar uma função que cria objetos de postagem de um blog, nele iram contem as seguintes propriedades:
//titulo, menssagem, autor, vizualizações, comentarios (autor, menssagem), estar ao-vivo


function postagem(titulo, menssagem, autor){
    const post = {
        titulo : titulo,
        menssagem : menssagem,
        autor : autor,
        vizualizações : 0,
        live: true
    }
    return(post);
}

let post1 = postagem('Meu primeiro post =)', 'queria deixar registrado meu primeiro post.', 'Leonardo');

post1.comentarios = ['Matheus', 'gostei do seu primero post ;) continue assim.'];
post1.vizualizações++;
post1.comentarios.push('Leandro', 'É assim mesmo que se começa!');
post1.vizualizações++;

console.log(post1);
