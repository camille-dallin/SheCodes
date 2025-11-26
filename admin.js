let usuarios = [];
let chaveStorage = "usuariosCadastrados";

document.addEventListener("DOMContentLoaded", function () {
    carregarStorage();
    atualizarLista();
});

function carregarStorage() {
    let dados = localStorage.getItem(chaveStorage);
    if (dados) {
        usuarios = JSON.parse(dados);
    }
}

function salvarStorage() {
    localStorage.setItem(chaveStorage, JSON.stringify(usuarios));
}

function cadastrar() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();

    if (nome === "" || email === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let data = new Date().toLocaleString();

    usuarios.push({ nome, email, data });
    salvarStorage();
    atualizarLista();
    limparCampos();
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}

function atualizarLista(filtro = "") {
    let lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    usuarios.forEach((user, index) => {
        if (
            user.nome.toLowerCase().includes(filtro.toLowerCase()) ||
            user.email.toLowerCase().includes(filtro.toLowerCase())
        ) {
            let li = document.createElement("li");
            li.innerHTML = `
                <strong>${user.nome}</strong> (${user.email})<br>
                <small>${user.data}</small>
                <button onclick="remover(${index})" style="margin-left:10px;">Excluir</button>
            `;
            lista.appendChild(li);
        }
    });
}

function remover(indice) {
    if (confirm("Deseja excluir este item?")) {
        usuarios.splice(indice, 1);
        salvarStorage();
        atualizarLista();
    }
}

function excluirTodos() {
    if (confirm("Deseja excluir todos os itens?")) {
        usuarios = [];
        salvarStorage();
        atualizarLista();
    }
}

function pesquisar() {
    let termo = document.getElementById("pesquisa").value.trim();
    atualizarLista(termo);
}
