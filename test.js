// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 156.92 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 dollar son 156.92 yens, entonces 3.5 dolares debe ser (3.5 * 156.92)
    const expected = 3.5 * 156.92;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(549.2199999999999); // 1 dollar son 156.92 yens, entonces 3.5 dolares deberían ser = (3.5 * 156.92)
})

test("One yen should be 0.0050 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(3.5);

    // Si 1 yen son 0.0050 pounds, entonces 3.5 yens debe ser (3.5 * 0.0050)
    const expected = 3.5 * 0.0050;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.0175); // Si 1 yen son 0.0050 pounds, entonces 3.5 yens debe ser (3.5 * 0.0050)
})