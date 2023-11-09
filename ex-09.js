const mensagensDivertidas = 
[
"O que é que uma impressora disse para a outra?",
"Essa folha é sua ou é impressão minha!",
"Quem é o rei da horta?",
"O rei-polho!",
"Por que as estrelas não fazem miau?",
"Por que Astro-não-mia!",
"O que os críticos falaram sobre o restaurante que foi aberto na lua?",
"A comida até que é boa, mas não tem atmosfera!",
];

let botaoDivertido = document.getElementById("botaoDivertido");
let mensagemDivertida = document.getElementById("mensagemDivertida");

botaoDivertido.addEventListener('click', function(){
    //math.floor(x) retorna o menor numero inteiro dentre o numero "X".
    //math.radom() retorna um numero pseudo-aleatorio no intervalo
    const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.randon()* mensagensDivertidas.length)]

    mensagemDivertida.textContent = mensagemAleatoria;

})