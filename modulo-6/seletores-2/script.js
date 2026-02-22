
let curtidas = [];


const input = document.getElementById("nome");
const botao = document.getElementById("btnCurtir");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {

    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

 
    if (!curtidas.includes(nome)) {
        curtidas.push(nome);
    }

    atualizarTexto();
    input.value = "";
});

function atualizarTexto() {

    const total = curtidas.length;

    if (total === 0) {
        resultado.textContent = "Ninguém curtiu";
    }
    else if (total === 1) {
        resultado.textContent = `${curtidas[0]} curtiu`;
    }
    else if (total === 2) {
        resultado.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    }
    else {
        resultado.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${total - 2} pessoas curtiram`;
    }
}
