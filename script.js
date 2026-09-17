console.log("Está funcionando, tudo maravilhoso!!!");
console.error("O Aluno, não está com nota final, impossivel classificar");
console.warn("Essa função está mais ou menos, resolva depois infeliz");

//Tipos de dados:
let nomeCompleto = "Matheus Porciúncula";
let idade = 30;
let numeroReal = 922.2;
let IsTeacher = true; // obrigatoriedade 
let adress = undefined; 
 
//Verificando tipo de variável 
console.log(typeof nomeCompleto);
console.log(typeof numeroReal);
console.log(typeof IsTeacher);
console.log(typeof nomeCompleto);

let user = "matheus123";
let password = 12345678; 

let https = "https://";
let partOne = "www.";
let partTwo = `youtube.com/id?=${user}&${password}`;

let url = `${https}${partOne}${partTwo}`;
console.log(url);
Template String - CONCATENAÇÃO
const firstName = "Rian";
const middleName = "Souza";
const fullName = firstName +" "+ middleName;
const phrase = `Opa, seja bem-vindo ao sistema usuario ${fullName}`;
console.log(phrase);

let nomeCompleto2 = "    Matheus de Azevedo"
let nomeCompleto3 = "Matheus de Azevedo"
console.log(nomeCompleto2.trim().toLowerCase());
console.log(nomeCompleto2.trim().toUpperCase());


let email2 = "   TESTAsfdfdds@SENAI.COM";
function validarEmail(email2){
    
    let email = email2.trim().toUpperCase();

    return email;
}

console.log(validarEmail(email2));
//FUNÇÕES MATEMÁTICAS E CONVERSÕES DE TIPO

let numero1 = 20;
let numero2 = parseInt("300.8");
console.log(numero2);
let numero3 = numero1 + numero2;
console.log(typeof numero3);

let numero5 = 20;
let numero6 = parseFloat("28.9");
console.log(numero6);
let numero7 = numero5 + numero6;
console.log(typeof numero7);

FUNÇÕES  -- MATEMÁTICAS: 

let numero10 = 1.5; // 5
console.log(numero10);
let arredondamento = Math.round(numero10);
console.log(arredondamento);

let numero11 = 1.5; // 5
console.log(numero10);
let arredondamento2 = Math.floor(numero10);
console.log(arredondamento2);

let numero12 = 1.3; // 5
console.log(numero12);
let arredondamento3 = Math.ceil(numero10);
console.log(arredondamento3);


let aleatorio = Math.random();
console.log(aleatorio);

let aleatorio2 = Math.random() * 10;
console.log(aleatorio2);


let aleatorio3 = Math.floor(Math.random() * 100);
console.log(aleatorio3);

function calcularDesconto(precoEmString, porcentagem)
{
    let numeroConvertido = parseFloat(precoEmString);
    let desconto = (porcentagem / 100) * numeroConvertido;
    let final = numeroConvertido - desconto;
    return final.toFixed(4);
}

console.log(calcularDesconto("14", 8));

ARRAY I Interação e Busca:



for(let count = 0; count < lista.length; count++)
{
    console.log(`${count + 1} ${lista[count]}`);
}

console.log("------------------");

let count = 0;
while( count < lista.length)
{
    console.log(lista[count]);
    count++;
}

lista.forEach(function(item){
    console.log(item);
});

function auxiliar(item)
{
    return console.log(item);
}
lista.forEach(auxiliar);

lista.forEach((item) => {
    console.log();
});


//REMOVENDO OU ADICIONANDO UM ITEM DE UMA LISTA

lista.push("Manteiga"); // Adiciona o último
lista.shift(); // Remove o primeiro item da lista
lista.pop(); // Remove o último item da lista
lista.forEach(item => console.log(item.trim().toUpperCase()));


INCLUDES 
console.log(lista.includes("Ativo"));

let listaDeIngredientes = ["Ovo", "Sugar", "Fermento", "Farinha", "Cenoura"];

listaDeIngredientes.forEach((item) => console.log(item));

let corante = listaDeIngredientes.find((item) => {
    if(item === 'Corante')
    {
        return true;
    }else
    {
        return false;
    }
});
console.log("Retornou aqui: " + corante);

let listaNomePessoas = ["Rafael", "Henrique", "Pablo", "Rian", "Nonato"];
console.log(listaNomePessoas);
let lista2 = listaNomePessoas.map((item) => {
    return item.toLowerCase();
});

console.log(lista2);

let lista3 = listaNomePessoas.filter((item) => {
    if(item.length >= 6)
    {
        return true;
    }else
    {
        return false;
    }
});

console.log(lista3);