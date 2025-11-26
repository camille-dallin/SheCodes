function abrirModal(elemento) {
    const modal = document.getElementById("mentorModal");
    
    // Pega os dados do card clicado
    const nome = elemento.getAttribute("data-nome");
    const cargo = elemento.getAttribute("data-cargo");
    const img = elemento.getAttribute("data-img");
    const desc = elemento.getAttribute("data-desc");

    // Preenche o modal
    document.getElementById("modalNome").innerText = nome;
    document.getElementById("modalCargo").innerText = cargo;
    document.getElementById("modalImg").src = img;
    document.getElementById("modalDesc").innerText = desc;

    // Mostra
    modal.style.display = "flex";
}

function fecharModal() {
    document.getElementById("mentorModal").style.display = "none";
}

// Fecha ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById("mentorModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Função para mudar o texto do botão ao agendar
function agendarMentoria() {
    // 1. Pega o botão pelo ID que criamos
    const botao = document.getElementById("btnAgendar");

    // 2. Muda o texto do botão
    botao.innerText = "Mentoria Agendada!";

    // 3. (Opcional) Muda a cor de fundo para verde e desabilita o botão
    botao.style.backgroundColor = "#28a745"; // Cor verde de sucesso
    botao.style.borderColor = "#28a745"; // Borda verde
    botao.style.cursor = "default"; // Muda o cursor para indicar que não é mais clicável
    botao.disabled = true; // Desabilita o botão para evitar múltiplos cliques
}