const input = document.getElementById("busca");
const botao = document.getElementById("btnBuscar");
const lista = document.getElementById("listaUsuarios");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", buscarUsuarios);

function buscarUsuarios() {

    const termo = input.value.trim();

    if (termo === "") {
        alert("Digite algo para pesquisar!");
        return;
    }

    lista.innerHTML = "";
    mensagem.textContent = "Carregando...";

    fetch(`https://api.github.com/search/users?q=${termo}`)
        .then(response => response.json())
        .then(data => {

            lista.innerHTML = "";
            mensagem.textContent = "";

            if (data.total_count === 0) {
                mensagem.textContent = "Não foram encontrados usuários para esta pesquisa";
                return;
            }

            data.items.forEach(usuario => {

                const li = document.createElement("li");

                li.innerHTML = `
                    <img src="${usuario.avatar_url}" alt="avatar">
                    <a href="${usuario.html_url}" target="_blank">
                        ${usuario.login}
                    </a>
                `;

                lista.appendChild(li);
            });
        })
        .catch(error => {
            mensagem.textContent = "Erro ao buscar usuários.";
            console.error(error);
        });
}
