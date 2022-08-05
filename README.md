# Rocketman_Leonardo_Oliveira_Compass
# __Apredizado de testes e JavaScript via Mocha e Chai__


[![NPM](https://img.shields.io/badge/license-MIT-brightgreen)](https://github.com/mayphias/Rocketman_Leonardo_Oliveira_Compass/blob/development/license)

[![NPM](https://img.shields.io/badge/Version-0.2-blue)]

Nós arquivos aqui presentes nesse reposítorio se encontram exercícios feitos em JavaScript para melhor entender a linguagem, exercícios esses feitos do canal: __Dev Aprender__ do youtube.
link video utilizado:   https://www.youtube.com/watch?v=i6Oi-YtXnAU
E um projeto de testes de um programa feito em JavaScript e bateria de testes feita também em JavaScript utilizando a biblioteca Mocha & Chai.

## Apresentação

Para a obtenção desse projeto e testagem na sua própria máquina basta ir na opção do github de :Code>Download_zip, terminado o download descompacte os arquivos em uma pasta de sua preferencia.
Os exercícios e o programa teste assim como o teste realizado via mocha e chai rodam via terminal e não possuem interface gráfica.
Você pode encontrar arquivos info.md contendo informações sobre os arquivos presentes nas pastas tirando a pasta /mocha_chai/node_modules que é a pasta de recursos dos scripts de mocha e chai utilizados.

### Pré requisitos

Para rodar os programas neste repositório é necessário ter instalado a versão 16.15.0 ou superior do NodeJavaScript presente no site: https://nodejs.org/en/ 

Para Windows:
Vá no site do NodeJS e baixe a versão recomendada ou a mais recente, sigua o passo a passo e conclua a instalação.
Aconselho utilização do VsCode para melhor utilizar os códigos nessa plataforma, já que essa IDE já tem um terminal integrado.
site do VsCode: https://code.visualstudio.com 
Para instalação sigua o passo a passo do site.

Para Linux:
Na maioria das distribuições de linux já vem com NodeJS instalado, verifique no terminal com:
$ node --version

caso dê erro, veja qual é o seu gerenciador de pacotes e instale, exemplo (talvez precise de permissão de administrador (sudo)):
$ dnf install nodejs


## Execução dos testes

Para a execução dos testes abra o terminal na pasta (ou entre no terminal integrado do VsCode), para executar os exercicios de JavaScript vá para /exercicios com o comando cd. Ex:
$ cd ./exercicios
E para executar os testes utilize, exemplo mini_projeto_5.js:
$ node mini_projeto_5.js

Os arquivos estão comentados e as variaveis modificaveis para utilização estão demarcadas.

Para a realização da bateria de testes navegue até a pasta /test com o comando cd.
e digite:
$ npm test
$
Com isso o arquivo test_calculadora.spec.js deve rodar via mocha e apresentar no terminal os testes no script listados.

### Break down into end to end tests

Essa bateria de testes faz a testagem do script calculadora.js e verifica se as suas funções são funcionais com diferentes tipos de INPUT para cada função presente.

Esses testes não testam a capacidade funcional extrema Ex: Big.Int, arredondamento de decimais grandes, etc.


## Técnologias utilizadas
Aqui são listadas as técnologias utilizadas no projeto

* NodeJs: https://nodejs.org/en/ 
* Mocha: https://mochajs.org
* Chai: https://www.chaijs.com


## Autores

* **Leonardo da Silva Oliveira** - *05/08/2022* - [Link para a raiz do projeto no git](https://github.com/https://github.com/mayphias/Rocketman_Leonardo_Oliveira_Compass)

Shoutout para: rafaelcastrocouto -> https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript que parte do código ideia da parte de fatorial da calculadora utilizada no teste foi retirado do comentário dele.


## License

Aqui devem vir as informações de licenciamento do projeto

## Créditos

* utilizando o template README do programa Rocketman
* Agradeço a equipe da compass.uol por esse momento de aprendizagem
