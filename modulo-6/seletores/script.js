// Array de objetos Tarefa
let tarefas = [];

// Função para adicionar nova tarefa
function adicionarTarefa() {
    const input = document.getElementById("descricao");
    const descricao = input.value.trim();

    if (descricao === "") {
        alert("Digite uma descrição válida!");
        return;
    }

    const novaTarefa = {
        descricao: descricao,
        status: false // inicia como não concluída
    };

    tarefas.push(novaTarefa);
    input.value = "";
    renderizarTarefas();
}

// Função para alternar status
function alternarStatus(index) {
    tarefas[index].status = !tarefas[index].status;
    renderizarTarefas();
}

// Função para renderizar tarefas na tela
function renderizarTarefas() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const div = document.createElement("div");
        div.className = "tarefa";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;
        checkbox.onclick = () => alternarStatus(index);

        const span = document.createElement("span");
        span.textContent = tarefa.descricao;

        if (tarefa.status) {
            span.classList.add("concluida");
        }

        div.appendChild(checkbox);
        div.appendChild(span);
        lista.appendChild(div);
    });
}