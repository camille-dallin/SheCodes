document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    if(form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;

            // Pega o banco de dados existente ou cria vazio
            let usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];

            usuarios.push({
                nome: nome,
                email: email,
                data: new Date().toLocaleString()
            });

            // Salva de volta
            localStorage.setItem("usuariosCadastrados", JSON.stringify(usuarios));

            alert("Cadastro realizado com sucesso!");
            window.location.href = "index.html";
        });
    }
});