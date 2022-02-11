var age = 15
var result = ''

if (age >= 18) {
    result = 'Ok!'
} else {
    result = 'Not Ok!'
}

console.log(result)

// Em situações que o retorno do if é apenas uma linha, podemos abrir mão de utilizar as chaves de escopo, o que diminui o código.
if (age >= 18) result = 'Ok!'
else result = 'Not Ok!'

// Refatorando com operador ternário.
result = age >= 18 ? 'Ok!' : 'Not Ok!'

console.log(result)