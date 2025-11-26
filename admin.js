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

    usuarios.push({ nome, email, data: new Date().toLocaleString() });
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
            li.style.background = "#201a2b";
            li.style.margin = "10px 0";
            li.style.padding = "10px";
            li.style.borderRadius = "8px";
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.style.alignItems = "center";
            
            li.innerHTML = `
                <div>
                    <strong>${user.nome}</strong> (${user.email})<br>
                    <small style="color:#a7a1b3">${user.data}</small>
                </div>
                <button onclick="remover(${index})" style="background:#ff4d4d; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Excluir</button>
            `;
            lista.appendChild(li);
        }
    });
}

function remover(indice) {
    if (confirm("Deseja excluir este usuário?")) {
        usuarios.splice(indice, 1);
        salvarStorage();
        atualizarLista();
    }
}

function excluirTodos() {
    if (confirm("Tem certeza? Isso apagará TODOS os usuários.")) {
        usuarios = [];
        salvarStorage();
        atualizarLista();
    }
}

function pesquisar() {
    let termo = document.getElementById("pesquisa").value.trim();
    atualizarLista(termo);
}