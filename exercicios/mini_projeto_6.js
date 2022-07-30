//criar um metodo para ler as propriedades de um objeto
//printar todas as propriedades do objeto que forem string

const movie = {
    filme : "Inception",
    ano : 2010,
    atorPrincipal : "LeonardoDiCaprio"
}


for (const property in movie) {
    if (typeof `${property}` == "string"){
  console.log(`${property}: ${movie[property]}`);
    }
}

//ainda em progresso...