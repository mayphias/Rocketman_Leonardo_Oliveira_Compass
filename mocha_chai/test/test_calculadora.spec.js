import assert from 'assert'
import chai, { expect } from 'chai'
//import exp from 'constants';
import calculadora from './../src/calculadora.js'

//Essa bateria de testes faz a testagem do script calculadora.js e verifica se as suas funções são funcionais
//verificando diferentes tipos de INPUT para cada função presente
//Esses testes não testam a capacidade funcional extrema Ex: Big.Int, arredondamento de decimais grandes, etc.
//não foi testado separação por (,) já que a linguagem utilizada usa esse caracter para separação, podendo ser utilizado em uma STRING, mas não foi abordado

//testes de soma
describe ('Testes das funções da calculadora.js', () => {
    describe('Testes da função de soma', () => {    
        it ('Soma de dois números positivos (INT)', () =>{
            let resultado = calculadora.soma(2, 3);
            assert.strictEqual(resultado, 5);
            expect(resultado).to.be.equal(5);  //mais facil de ler qual interação está sendo testada
        });
        it ('Soma de um número positivo e um negativo(INT)', () => {
            let resultado = calculadora.soma(2, -3);
            assert.strictEqual(resultado, -1);
            expect(resultado).to.be.equal(-1);  //mais facil de ler qual interação está sendo testada
        });
        it ('Soma de dois números negativos(INT)', () =>{
            let resultado = calculadora.soma(-2, -3);
            assert.strictEqual(resultado, -5);
            expect(resultado).to.be.equal(-5);  //mais facil de ler qual interação está sendo testada
        });
        it ('Soma de um número INT e um FLOAT', () =>{
            let resultado = calculadora.soma(2.1, 3);
            assert.strictEqual(resultado, 5.1);
            expect(resultado).to.be.equal(5.1);  //mais facil de ler qual interação está sendo testada
        });
        it ('Soma de um número STRING e um INT', () =>{
            let resultado = calculadora.soma("2", 3);
            assert.strictEqual(resultado, 5);
            expect(resultado).to.be.equal(5);  //mais facil de ler qual interação está sendo testada
        });
        it ('Soma de dois números STRING', () =>{
            let resultado = calculadora.soma("2", "3");
            assert.strictEqual(resultado, "5");
            expect(resultado).to.be.equal("5");  //mais facil de ler qual interação está sendo testada
        });
    });
//testes de subtração
    describe ('Testes da função de subtração', () => {
        it ('Subtração de um número positivo e um negativo (INT)', () =>{
            let resultado = calculadora.sub(2, 3);
            assert.strictEqual(resultado, -1);
            expect(resultado).to.be.equal(-1);  //mais facil de ler qual interação está sendo testada
        });
        it ('Subtração de dois numeros negativos (INT)', () =>{
        let resultado = calculadora.sub(-2, 3);
        assert.strictEqual(resultado, -5);
        expect(resultado).to.be.equal(-5);  //mais facil de ler qual interação está sendo testada
        });
        it ('Subtração de um número FLOAT e um INT', () =>{
            let resultado = calculadora.sub(2.1, 3);
            assert.strictEqual(resultado, -0.9);
            expect(resultado).to.be.equal(-0.9);  //mais facil de ler qual interação está sendo testada
        });
        it ('Subtração de dois FLOATS', () =>{
            let resultado = calculadora.sub(2.2, 3.1);
            assert.strictEqual(resultado, -0.9);
            expect(resultado).to.be.equal(-0.9);  //mais facil de ler qual interação está sendo testada
        });
        it ('Subtração de um número STRING e um INT', () =>{
            let resultado = calculadora.sub("3", 2);
            assert.strictEqual(resultado, 1);
            expect(resultado).to.be.equal(1);  //mais facil de ler qual interação está sendo testada
        });
        it ('Subtração de duas STRINGS', () =>{
            let resultado = calculadora.sub("2", "3");
            assert.strictEqual(resultado, -1);
            expect(resultado).to.be.equal(-1);  //mais facil de ler qual interação está sendo testada
        });
    });
//testes de multiplicação
    describe ('Testes da função de multiplicação', () => {
        it ('Multiplicação de dois números positivos (INT)', () =>{
            let resultado = calculadora.mult(2, 3);
            assert.strictEqual(resultado, 6);
            expect(resultado).to.be.equal(6);  //mais facil de ler qual interação está sendo testada
        });
        it ('Multiplicação de um número negativo e um positivo (INT)', () =>{
        let resultado = calculadora.mult(-2, 3);
        assert.strictEqual(resultado, -6);
        expect(resultado).to.be.equal(-6);  //mais facil de ler qual interação está sendo testada
        });
        it ('Multiplicação de dois números negativos (INT)', () =>{
          let resultado = calculadora.mult(-2, -3);
            assert.strictEqual(resultado, 6);
            expect(resultado).to.be.equal(6);  //mais facil de ler qual interação está sendo testada
        });
        it ('Multiplicação de um número FLOAT e um INT', () =>{
            let resultado = calculadora.mult(2.1, 3);
            assert.strictEqual(resultado, 6.3);
            expect(resultado).to.be.equal(6.3);  //mais facil de ler qual interação está sendo testada
        });
        it ('Multiplicação de dois FLOATS', () =>{
            let resultado = calculadora.mult(2.1, 3.1);
            assert.strictEqual(resultado, 6.51);
            expect(resultado).to.be.equal(6.51);  //mais facil de ler qual interação está sendo testada
        });
        it ('Multiplicação de um número STRING e um INT', () =>{
            let resultado = calculadora.mult("2", 3);
            assert.strictEqual(resultado, 6);
            expect(resultado).to.be.equal(6);  //mais facil de ler qual interação está sendo testada
        });
        it ('Multiplicação de dois números STRINGS', () =>{
            let resultado = calculadora.mult("2", "3");
            assert.strictEqual(resultado, 6);
            expect(resultado).to.be.equal(6);  //mais facil de ler qual interação está sendo testada
        });
    });
//Testes da função de divisão
    describe ('Testes da função de divisão', () => {
        it ('Divisão de dois INTs positivos', () =>{
            let resultado = calculadora.div(15, 3);
            assert.strictEqual(resultado, 5);
            expect(resultado).to.be.equal(5);  //mais facil de ler qual interação está sendo testada
        });
        it ('Divisão de dois INTs, quociente negativo', () =>{
            let resultado = calculadora.div(-15, 3);
            assert.strictEqual(resultado, -5);
            expect(resultado).to.be.equal(-5);  //mais facil de ler qual interação está sendo testada
        });
        it ('Divisão de dois INTs, dividendo negativo', () =>{
            let resultado = calculadora.div(15, -3);
            assert.strictEqual(resultado, -5);
            expect(resultado).to.be.equal(-5);  //mais facil de ler qual interação está sendo testada
        });
        it ('Divisão de um quociente FLOAT por um dividendo INT', () =>{
            let resultado = calculadora.div(15.5, 5);
            assert.strictEqual(resultado, 3.1);
            expect(resultado).to.be.equal(3.1);  //mais facil de ler qual interação está sendo testada
        });
        it ('Divisão de um quociente INT e um dividendo FLOAT', () =>{
            let resultado = calculadora.div(16, 3.2);
            assert.strictEqual(resultado, 5);
            expect(resultado).to.be.equal(5);  //mais facil de ler qual interação está sendo testada
        });
        it ('Divisão de quociente STRING e dividendo INT', () =>{
            let resultado = calculadora.div("15", 3);
            assert.strictEqual(resultado, 5);
            expect(resultado).to.be.equal(5);  //mais facil de ler qual interação está sendo testada
        });
        it ('Divisão de quociente INT e dividendo STRING', () =>{
            let resultado = calculadora.div(15, "3");
            assert.strictEqual(resultado, 5);
            expect(resultado).to.be.equal(5);  //mais facil de ler qual interação está sendo testada
        });
        it ('Divisão de dois números STRING', () =>{
            let resultado = calculadora.div("15", "3");
            assert.strictEqual(resultado, 5);
            expect(resultado).to.be.equal(5);  //mais facil de ler qual interação está sendo testada
        });
        it ('Erro da divisão por zero', () =>{
            let resultado = calculadora.div(15, 0);
            assert.strictEqual(resultado, "ERROR, can't divide by 0");
            expect(resultado).to.be.equal("ERROR, can't divide by 0");  //mais facil de ler qual interação está sendo testada
        });
    });
//Testes da função exponencial
    describe ('Testes da função exponencial', () => {
        it ('Exponencial de dois números INT', () =>{
            let resultado = calculadora.exp(3, 3);
            assert.strictEqual(resultado, 27);
            expect(resultado).to.be.equal(27);  //mais facil de ler qual interação está sendo testada
        });
        it ('Exponencial de dois números INT e expoente negativo', () =>{
            let resultado = calculadora.exp(4, -2);
            assert.strictEqual(resultado, 0.0625);
            expect(resultado).to.be.equal(0.0625);  //mais facil de ler qual interação está sendo testada
        });
        it ('Exponencial de dois números INT e base negativa', () =>{
            let resultado = calculadora.exp(-4, 2);
            assert.strictEqual(resultado, 16);
            expect(resultado).to.be.equal(16);  //mais facil de ler qual interação está sendo testada
        });
        it ('Exponencial de um número FLOAT e expoente INT', () =>{
            let resultado = calculadora.exp(4.2, 2);
            assert.strictEqual(resultado, 17.64);
            expect(resultado).to.be.equal(17.64);  //mais facil de ler qual interação está sendo testada
        });
        it ('Exponencial de base STRING e expoente INT', () =>{
            let resultado = calculadora.exp("4", 2);
            assert.strictEqual(resultado, 16);
            expect(resultado).to.be.equal(16);  //mais facil de ler qual interação está sendo testada
        });
        it ('Exponencial de expoente STRING e base INT', () =>{
            let resultado = calculadora.exp(4, "2");
            assert.strictEqual(resultado, 16);
            expect(resultado).to.be.equal(16);  //mais facil de ler qual interação está sendo testada
        });
        it ('Exponencial de base e expoente STRING', () =>{
            let resultado = calculadora.exp("4", "2");
            assert.strictEqual(resultado, 16);
            expect(resultado).to.be.equal(16);  //mais facil de ler qual interação está sendo testada
        });
    });
//Teste da função de fatorial     --- Parte interrompida por conta da função recursiva e a impossibilidade de ver os resultados pelo número massivo de console.log do mocha via terminal
    describe ('Teste da função fatorial', () => {
        it ('Fatorial de um número positivo INT', () =>{
            let resultado = calculadora.cfact(4);
            assert.strictEqual(resultado, 24);
            expect(resultado).to.be.equal(24);  //mais facil de ler qual interação está sendo testada
        }); 
        /*it ('Fatorial de um número negativo INT', () =>{
            let resultado = calculadora.cfact(-4);
            assert.strictEqual(resultado, -24);
            expect(resultado).to.be.equal(-24);  //mais facil de ler qual interação está sendo testada
        }); */
        /*it ('Fatorial de um número positivo FLOAT', () =>{
            let resultado = calculadora.cfact(4.2);
            assert.strictEqual(resultado, 32.5780961);
            expect(resultado).to.be.equal(32.5780961);  //mais facil de ler qual interação está sendo testada
        }); */
        it ('Fatorial de um número positivo STRING', () =>{
            let resultado = calculadora.cfact("4");
            assert.strictEqual(resultado, 24);
            expect(resultado).to.be.equal(24);  //mais facil de ler qual interação está sendo testada
        }); 
    });
//testes da função de raiz quadrada
    describe ('Testes da função de raiz quadrada', () => {
        it ('Raiz quadrada de um número positivo INT', () =>{
            let resultado = calculadora.sqrt(4);
            assert.strictEqual(resultado, 2);
            expect(resultado).to.be.equal(2);  //mais facil de ler qual interação está sendo testada
        }); 
        it ('Erro de raiz quadrada de um número negativo INT', () =>{
            let resultado = calculadora.sqrt(-4);
            assert.strictEqual(resultado, 'ERROR, imaginary numbers not supported.');
            expect(resultado).to.be.equal('ERROR, imaginary numbers not supported.');  //mais facil de ler qual interação está sendo testada
        });
        it ('Raiz quadrada de um número FLOAT', () =>{
            let resultado = calculadora.sqrt(50.5);
            assert.strictEqual(resultado, 7.1063352);
            expect(resultado).to.be.equal(7.1063352);  //mais facil de ler qual interação está sendo testada
        }); 
    });


});