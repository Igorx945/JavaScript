let numeroSecreto = Math.floor(Math.random() * 100) + 1

let qtdtentativas = 0

let verificarBotao = document.getElementById("verificação");
let tntativa = document.getElementById("tentativa");
let dica = document.getElementById("dica");

verificarBotao.addEventListener("click", function (){

    const tentativa = parseInt(tentativaInput.value);

    if(tentativa === numeroSecreto){
        dica.textContent = `Parabens! vc acertou em ${qtdtentativas}.`;
        verificarBotao.disable = true;
    } else if (tentativa < numeroSecreto) {
        dica.textContent = "tente um numero maior";
        qtdtentativas++;
    }else {
    dica.textContent = "tente um numero menor";
    qtdtentativas++;
}
});