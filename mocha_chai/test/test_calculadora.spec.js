import assert from 'assert'
import chai, { expect } from 'chai'
import exp from 'constants';
import calculadora from './../src/calculadora.js'

//testes de soma
    describe ('Testes da função de soma', () => {
        it ('Soma de dois números positivos', () =>{
            let resultado = calculadora.soma(2, 3);
            assert.strictEqual(resultado, 5);
            expect(resultado).to.be.equal(5);
        });
        it ('Soma de um número positivo e um negativo', () => {
            let resultado = calculadora.soma(2, -3);
            assert.strictEqual(resultado, -1);
            expect(resultado).to.be.equal(-1);
        });
        it ('Soma de dois números negativos', () =>{
            let resultado = calculadora.soma(-2, -3);
            assert.strictEqual(resultado, -5);
            expect(resultado).to.be.equal(-5);
        });
//testes de subtração
    describe ('Testes da função de subtração', () => {
        it ('Subtração de um número positivo e um negativo', () =>{
            let resultado = calculadora.sub(2, 3);
            assert.strictEqual(resultado, -1);
            expect(resultado).to.be.equal(-1);
        });
        it ('Subtração de dois numeros negativos', () =>{
        let resultado = calculadora.sub(-2, 3);
        assert.strictEqual(resultado, -5);
        expect(resultado).to.be.equal(-5);
    });
    });
//testes de multiplicação
    describe ('Testes da função de multiplicação', () => {
        it ('Multiplicação de dois números positivos', () =>{
            let resultado = calculadora.mult(2, 3);
            assert.strictEqual(resultado, 6);
            expect(resultado).to.be.equal(6);
        });
        it ('Multiplicação de um número negativo e um positivo', () =>{
        let resultado = calculadora.mult(-2, 3);
        assert.strictEqual(resultado, -6);
        expect(resultado).to.be.equal(-6);
    });
    it ('Multiplicação de dois números negativos', () =>{
        let resultado = calculadora.mult(-2, -3);
        assert.strictEqual(resultado, 6);
        expect(resultado).to.be.equal(6);
    });
    });
});