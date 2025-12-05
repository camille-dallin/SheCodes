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

    const usuariosFiltrados = usuarios.filter(user => 
        user.nome.toLowerCase().includes(filtro.toLowerCase()) ||
        user.email.toLowerCase().includes(filtro.toLowerCase())
    );

    if (usuariosFiltrados.length === 0) {
        lista.innerHTML = `
            <li style="text-align:center; color: #666; padding: 20px;">
                Nenhum usuário encontrado.
            </li>`;
        return;
    }

    usuariosFiltrados.forEach((user) => {
        let indexOriginal = usuarios.indexOf(user); 
        let li = document.createElement("li");
        
        li.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(32, 26, 43, 0.6); padding:10px; margin-bottom:10px; border-radius:8px; border:1px solid #3a314d;">
                <div>
                    <strong style="color:white;">${user.nome}</strong> <span style="color:#a7a1b3; font-size:0.9em;">(${user.email})</span><br>
                    <small style="color:#7f5af0">📅 ${user.data}</small>
                </div>
                <button onclick="remover(${indexOriginal})" style="background:#ff4d4d; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Excluir</button>
            </div>
        `;
        lista.appendChild(li);
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