document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    if(form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;

            let usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];

            usuarios.push({
                nome: nome,
                email: email,
                data: new Date().toLocaleString()
            });

            localStorage.setItem("usuariosCadastrados", JSON.stringify(usuarios));

            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html";
        });
    }
});

function abrirTermos(event) {
    if(event) event.preventDefault();
    document.getElementById("termosModal").style.display = "flex";
}

function fecharTermos() {
    document.getElementById("termosModal").style.display = "none";
}