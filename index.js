// Conteúdo do arquivo index.js
// Coloque aqui as outras questões conforme necessário

// Questão 4
console.log("Questão 4:");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Questão 5
console.log("Questão 5:");
function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(5, 3));  // Saída: 8

// Questão 6
console.log("Questão 6:");
let frutas = ["kiwi", "morango", "manga", "uva"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Questão 7
console.log("Questão 7:");
let livro = {
    título: "Harry Potter e o Enigma do Príncipe",
    autor: "J.K. Rowling",
    numeroDePaginas: 512
};
console.log(livro.titulo);  // Saída: Harry Potter e o Enigma do Príncipe
console.log(livro.autor);   // Saída: J.K. Rowling
console.log(livro.numeroDePaginas);  // Saída: 512

// Questão 8
console.log("Questão 8:");
document.getElementById("myButton").addEventListener("click", function() {
    alert("Você clicou no botão!");
});

// Questão 9
console.log("Questão 9:");
function capitalize(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalize("ola mundo"));  // Saída: "Olá Mundo"

// Questão 10
console.log("Questão 10:");
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Erro:', error));
