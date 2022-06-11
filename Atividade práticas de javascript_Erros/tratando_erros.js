/*função que recebe um array e retorna esse 
array caso o seu tamanho corresponda ao número
enviado como parâmetro na função */
function validaArray(arr, num) {
    // utilizando a declaração try e catch.
    try {
        /*nesse primeiro if é verificado se os parâmetros não foram enviados, 
        lançando um erro do tipo ReferenceError.*/
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros');
        /*nesse segundo if é verificado se o array não é do tipo "object"
        lançando um erro do tipo TypeError.*/
        if (typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo objct');
        /*nesse terceiro if é verificado se o tipo do número não é "number",
        lançando um erro do tipo TypeError.*/
        if (typeof num !== 'number') throw new TypeError('Num percisa ser do tipo number');
        /*nesse quarto if é verificado se o tamnho do array é diferente do número
        enviado como parâmetro, lançando um erro do tipo RangeError.*/
        if (arr.length !== num) throw new RangeError('Tamanho inválido');

        return arr;
    } catch (e) {
        /*filtrando as chamadas do catch por cada 
        tipo de erro acima, utilizando o operador instanceof */
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!')
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError!')
            console.log(e.message)
        } else if (e instanceof RandeError) {
            console.log('Este erro é um RangeError!')
            console.log(e.message)
        } else {
            console.log('Tipo de erro não esperado:' + e);
        }
    }
}
/*chamando a função em um cosole e
 verificando o resultados com diferentes parametros */
console.log(validaArray());
console.log(validaArray([1, 2, 3, 4, 5], 5));