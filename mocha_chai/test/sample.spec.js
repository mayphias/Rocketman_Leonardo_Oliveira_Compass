import assert from 'assert'

describe ('Meu primeiro teste', () => {
    it ('verificar uma igualdade', () =>{
    let aux = 2;
    assert.strictEqual(aux, 2);
    });
    it ('verificar uma desigualdade', () =>{
        let aux = 2;
        assert.notStrictEqual(aux, 3);
        });
});